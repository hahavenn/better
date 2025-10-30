import bcrypt from "bcryptjs";
import z from "zod";
import { v4 } from "uuid";

import db from "~~/server/db";
import { usersTable } from "~~/server/db/schema/user";

import LOG_TYPES from "~~/server/constants/logs";

import type { AuthSignupResponse } from "~~/shared/types/response/auth/signup";
import type { ErrorResponse } from "~~/shared/types/response/error";

import setJwt from "~~/server/utils/setJwt";

const User = z.object({
  login: z
    .string("login should be string")
    .refine((login) => /^[\p{L}\d_-]+$/u.test(login), {
      error:
        "login can contain only: letters, hieroglyphs, numbers, underscore and dash",
    })
    .refine((login) => login.length <= 20, { error: "max login length is 20" }),
  password: z
    .string("password should be string")
    .refine((password) => password.length <= 50, {
      error: "max password length is 50",
    }),
});

export default defineEventHandler({
  async handler(event): Promise<AuthSignupResponse | ErrorResponse> {
    const userParse = User.safeParse(await readBody(event));

    if (!userParse.success) {
      setResponseStatus(event, 400);
      return {
        message: userParse.error.issues[0].message,
      };
    }

    const credentials = userParse.data;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(credentials.password, salt);
    const userId = v4();

    try {
      await db.insert(usersTable).values({
        id: userId,
        login: credentials.login,
        password: hashPassword,
      });
    } catch (error) {
      const handled = await handleError(error);

      let message: null | string = null;

      if (handled.type === "SQLite") {
        switch (handled.error.cause.code) {
          case "SQLITE_CONSTRAINT_UNIQUE": {
            message = `User with login '${credentials.login}' already exists`;

            setResponseStatus(event, 409);
            break;
          }

          default: {
            logger(handled.error.cause.code, {
              type: LOG_TYPES.SQLITE,
            });

            message = "Fatal";
            setResponseStatus(event, 500);

            break;
          }
        }

        return { message };
      }

      logger(handled.error);
      setResponseStatus(event, 500);
      return { message: "Fatal" };
    }

    setJwt(event, {
      type: "access",
      userId,
    });
    setJwt(event, {
      type: "refresh",
      userId,
    });

    setResponseStatus(event, 201);
    return {
      id: userId,
      login: credentials.login,
    };
  },
});
