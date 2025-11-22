import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";

import db from "~~/server/db";
import { usersTable } from "~~/server/db/schema/users";
import type { UserSelectType } from "~~/server/db/types/user";

import { UserCredentialsZodSchema } from "~~/server/shared/zod/user";

import type { ErrorResponse } from "~~/shared/types/response/error";
import type { AuthSigninResponse } from "~~/shared/types/response/auth/signin";

import LOG_TYPES from "~~/server/constants/logs";

defineRouteMeta({
  openAPI: {
    tags: ["Auth"],
    description:
      "Sign in user by user credentials and set access&refresh jwt's",
    summary: "Sign in user",
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
      200: {
        description: "User authorized, access&refresh jwt's was set",
        content: {
          "application/json": {
            example: {
              userId: "efdac001-68e7-4f92-9340-ea462e65c712",
              login: "hahavenn",
            },
          },
        },
      },
      401: {
        description:
          "Authorization failed. Invalid login or password or non-exist user",
        content: {
          "application/json": {
            example: {
              message: "Invalid login or password",
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
  async handler(event): Promise<AuthSigninResponse | ErrorResponse> {
    const userCredentialsParse = UserCredentialsZodSchema.safeParse(
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
    const userCredentials = userCredentialsParse.data;

    let user: UserSelectType | undefined = undefined;
    try {
      user = (
        await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.login, userCredentials.login))
      )[0];
    } catch (error) {
      logger(error, {
        type: isSQLiteError(error) ? LOG_TYPES.SQLITE : undefined,
      });
      setResponseStatus(event, 500);
      return { message: "Fatal" };
    }

    if (user === undefined) {
      setResponseStatus(event, 401);
      return { message: "Invalid login or password" };
    }

    const isPasswordCorrect = await compare(
      userCredentials.password,
      user?.password ?? ""
    );
    if (!isPasswordCorrect) {
      setResponseStatus(event, 401);
      return { message: "Invalid login or password" };
    }

    const jwtGen = JWTGenerator(event, user.id);
    await jwtGen.next();
    const successJWTSet = await jwtGen.next();
    if (successJWTSet.value?.message !== undefined) {
      return { message: successJWTSet.value.message };
    }

    return {
      userId: user.id,
      login: user.login,
    };
  },
});
