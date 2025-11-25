import { createSigner } from "fast-jwt";
import { v4 } from "uuid";

import LOG_TYPES from "~~/server/constants/logs";

import db from "~~/server/db";
import { refreshTokensTable } from "~~/server/db/schema/refreshTokens";

import type { ErrorResponse } from "~~/shared/types/response/error";
import type { DevAuthRefreshExpired } from "~~/shared/types/response/dev/auth/refresh_expired";

function isCorrectBodyType(body: unknown): body is {
  userId: string;
} {
  const b = body as any;

  const validated = ["userId" in b && typeof b.userId === "string"].every(
    (condition) => condition
  );

  return validated;
}

const IMMEDIATE_REFRESH_JWT_EXPIRATION_TIME_MS = 1;

defineRouteMeta({
  openAPI: {
    tags: ["Dev"],
    description:
      "Get immediately expired refresh jwt for test/dev purposes. Provided userId should be taken from existing user",
    summary: "Get immediately expired refresh jwt",
    requestBody: {
      content: {
        "application/json": {
          example: {
            userId: "efdac001-68e7-4f92-9340-ea462e65c712",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Success creation of immediate expired refresh jwt",
        content: {
          "application/json": {
            example: {
              expiredRefreshJWT: "expired_jwt",
            },
          },
        },
      },
      422: {
        description: "Invalid request body",
        content: {
          "application/json": {
            example: {
              message: "Incorrect request body",
            },
          },
        },
      },
      500: {
        description: "Fatal error occurred, see logs for details",
        content: {
          "application/json": {
            example: {
              message: "Fatal",
            },
          },
        },
      },
    },
  },
});

export default defineEventHandler({
  async handler(event): Promise<DevAuthRefreshExpired | ErrorResponse> {
    const body = await readBody(event);

    if (!isCorrectBodyType(body)) {
      setResponseStatus(event, 422);
      return {
        message: "Incorrect request body",
      };
    }

    const expiredRefreshJWT = createSigner({
      key: process.env["JWT_SECRET"],
      sub: body.userId,
      expiresIn: IMMEDIATE_REFRESH_JWT_EXPIRATION_TIME_MS,
      jti: v4(),
    })({});

    try {
      await db.insert(refreshTokensTable).values({
        token: expiredRefreshJWT,
        userId: body.userId,
        expiresAt: new Date(
          Date.now() + IMMEDIATE_REFRESH_JWT_EXPIRATION_TIME_MS
        ).toUTCString(),
      });
    } catch (error) {
      logger(error, {
        type: isSQLiteError(error) ? LOG_TYPES.SQLITE : undefined,
      });
      setResponseStatus(event, 500);
      return { message: "Fatal" };
    }

    setResponseStatus(event, 200);
    return {
      expiredRefreshJWT,
    };
  },
});
