import { eq } from "drizzle-orm";
import { createVerifier, TokenError } from "fast-jwt";
import z from "zod";

import COOKIE from "~~/server/constants/cookie";
import LOG_TYPES from "~~/server/constants/logs";

import db from "~~/server/db";
import { refreshTokensTable } from "~~/server/db/schema/refreshTokens";
import type { RefreshTokenSelectType } from "~~/server/db/types/refreshTokens";

import { UserIdZod } from "~~/server/shared/zod/user";

import type { AuthRefreshResponse } from "~~/shared/types/response/auth/refresh";
import type { ErrorResponse } from "~~/shared/types/response/error";

defineRouteMeta({
  openAPI: {
    tags: ["Auth"],
    description:
      "Update access&refresh jwt pair by valid refresh jwt and relative userId",
    summary: "Update access&refresh jwt pair",
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
        description: "Success verification, set new pair of access&refresh",
        content: {
          "application/json": {
            example: {
              userId: "efdac001-68e7-4f92-9340-ea462e65c712",
            },
          },
        },
      },
      422: {
        description: "Invalid 'userId'",
        content: {
          "application/json": {
            example: {
              message: "Incorrect request body",
            },
          },
        },
      },
      401: {
        description:
          "Token verification failed due different reasons. Requested 'userId' is different from payload's 'userId'",
        content: {
          "application/json": {
            example: {
              message: "Unauthorized",
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
  async handler(event): Promise<AuthRefreshResponse | ErrorResponse> {
    const refreshParse = z
      .object({
        userId: UserIdZod,
      })
      .safeParse(await readBody(event));
    if (!refreshParse.success) {
      setResponseStatus(event, 422);
      return {
        message:
          refreshParse.error.issues[0]?.message ?? "Incorrect request body",
      };
    }
    const userId = refreshParse.data.userId;

    const refreshToken = getCookie(event, COOKIE.REFRESH_JWT);

    const jwtGen = JWTGenerator(event, userId);
    await jwtGen.next();

    if (refreshToken === undefined) {
      setResponseStatus(event, 401);
      return { message: "Unauthorized" };
    }

    let payload: unknown = null;
    try {
      payload = createVerifier({ key: process.env.JWT_SECRET })(refreshToken);
    } catch (error) {
      if (error instanceof TokenError) {
        setResponseStatus(event, 401);
        return { message: "Unauthorized" };
      } else {
        logger(error);
        setResponseStatus(event, 500);
        return { message: "Fatal" };
      }
    }
    if (!isJWTPayload(payload) || payload.sub !== userId) {
      setResponseStatus(event, 401);
      return { message: "Unauthorized" };
    }

    let activeRefreshJWT: RefreshTokenSelectType | undefined = undefined;

    try {
      activeRefreshJWT = (
        await db
          .select()
          .from(refreshTokensTable)
          .where(eq(refreshTokensTable.token, refreshToken))
      )[0];
    } catch (error) {
      logger(error, {
        type: isSQLiteError(error) ? LOG_TYPES.SQLITE : undefined,
      });
      setResponseStatus(event, 500);
      return { message: "Fatal" };
    }

    if (!activeRefreshJWT) {
      setResponseStatus(event, 401);
      return { message: "Unauthorized" };
    }

    if (new Date(activeRefreshJWT.expiresAt) < new Date()) {
      try {
        await db
          .delete(refreshTokensTable)
          .where(eq(refreshTokensTable.token, activeRefreshJWT.token));
      } catch (error) {
        logger(error, {
          type: isSQLiteError(error) ? LOG_TYPES.SQLITE : undefined,
        });
      } finally {
        setResponseStatus(event, 401);
        return { message: "Unauthorized" };
      }
    }

    const successJWTSet = await jwtGen.next();
    if (successJWTSet.value?.message !== undefined) {
      return { message: successJWTSet.value.message };
    }

    setResponseStatus(event, 200);
    return { userId };
  },
});
