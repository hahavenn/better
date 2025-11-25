import db from "~~/server/db";
import * as tables from "~~/server/db/schema/_";

import type { DevResetDbResponse } from "~~/shared/types/response/dev/db/reset";
import type { ErrorResponse } from "~~/shared/types/response/error";

defineRouteMeta({
  openAPI: {
    tags: ["Dev"],
    description: "Reset all databases",
    summary: "Reset all databases",
    responses: {
      200: {
        description: "Success clear",
        content: {
          "application/json": {
            example: {
              ok: true,
            },
          },
        },
      },
      500: {
        description: "Failed reset",
        content: {
          "application/json": {
            example: {
              error: "error object",
            },
          },
        },
      },
    },
  },
});

export default defineEventHandler({
  async handler(event): Promise<DevResetDbResponse | ErrorResponse> {
    try {
      for (const key of Object.keys(tables)) {
        const table = { ...tables }[key];

        if (table === undefined) throw `Table '${table}' is undefined`;

        await db.delete(table);
      }
    } catch (error) {
      setResponseStatus(event, 500);
      return {
        message: JSON.stringify(error),
      };
    }

    return { ok: true };
  },
});
