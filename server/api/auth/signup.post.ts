import { genSalt, hash } from "bcryptjs";
import { v4 } from "uuid";

import db from "~~/server/db";
import { usersTable } from "~~/server/db/schema/users";

import LOG_TYPES from "~~/server/constants/logs";
import SQLITE_RESULT_CODES from "~~/server/constants/SQLiteResultCodes";
import { OPEN_API_TAGS } from "~~/server/constants/openApi";

import type { AuthSignupResponse } from "~~/shared/types/response/auth/signup";
import type { ErrorResponse } from "~~/shared/types/response/error";

import UserCredentialsSchema from "~~/server/shared/zod/user";

import JWTGenerator from "~~/server/utils/JWTGenerator";

defineRouteMeta({
  openAPI: {
    tags: [OPEN_API_TAGS.AUTH],
    description:
      "Sign up user by user credentials and set access&refresh jwt's",
    summary: "Sign up user",
    requestBody: {
      content: {
        "application/json": {
          example: {
            login: "hahavenn",
            password: "hahavenn",
          },
        },
      },
    },
    responses: {
      201: {
        description: "User created, access&refresh jwt's was set",
        content: {
          "application/json": {
            example: {
              userId: "efdac001-68e7-4f92-9340-ea462e65c712",
              login: "hahavenn",
            },
          },
        },
      },
      409: {
        description: "User with given login already exist",
        content: {
          "application/json": {
            example: {
              message: "User with login 'hahavenn' already exist",
            },
          },
        },
      },
      422: {
        description: "Invalid user credentials",
        content: {
          "application/json": {
            example: {
              message: "Invalid user credentials",
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
  async handler(event): Promise<AuthSignupResponse | ErrorResponse> {
    const userCredentialsParse = UserCredentialsSchema.safeParse(
      await readBody(event)
    );
    if (!userCredentialsParse.success) {
      setResponseStatus(event, 422);
      return {
        message:
          userCredentialsParse.error.issues[0]?.message ??
          "Incorrect user credentials",
      };
    }

    const credentials = userCredentialsParse.data;
    const salt = await genSalt(10);
    const hashPassword = await hash(credentials.password, salt);
    const userId = v4();

    try {
      await db.insert(usersTable).values({
        id: userId,
        login: credentials.login,
        password: hashPassword,
        updatedAt: new Date().toUTCString(),
      });
    } catch (error) {
      if (isSQLiteError(error)) {
        switch (error.cause.code) {
          case SQLITE_RESULT_CODES[2067]: {
            setResponseStatus(event, 409);
            return {
              message: `User with login '${credentials.login}' already exist`,
            };
          }

          default: {
            logger(error.cause.code, {
              type: LOG_TYPES.SQLITE,
            });

            setResponseStatus(event, 500);
            return { message: "Fatal" };
          }
        }
      }

      logger(error);
      setResponseStatus(event, 500);
      return { message: "Fatal" };
    }

    const jwtGen = JWTGenerator(event, userId);
    await jwtGen.next();

    const successJWTSet = await jwtGen.next();
    if (successJWTSet.value?.message !== undefined) {
      return { message: successJWTSet.value.message };
    }

    setResponseStatus(event, 201);
    return {
      userId,
      login: credentials.login,
    };
  },
});
