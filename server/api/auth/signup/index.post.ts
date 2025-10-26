import bcrypt from "bcryptjs";
import z from "zod";
import { createSigner } from "fast-jwt";

import db from "~~/server/db";
import { usersTable } from "~~/server/db/schema/user";

import LOG_TYPES from "~~/server/constants/logs";
import COOKIE from "~~/server/constants/cookie";
import TOKEN_EXPIRATION_TIMES from "~~/server/constants/token";

import type { AuthSignupResponse } from "~~/shared/types/response/auth/signup";
import type { ErrorResponse } from "~~/shared/types/response/error";

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
    const parsed = User.safeParse(await readBody(event));

    if (!parsed.success) {
      setResponseStatus(event, 400);
      return {
        message: parsed.error.issues[0].message,
      };
    }

    const credentials = parsed.data;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(credentials.password, salt);
    let createdUserId: null | number = null;

    try {
      const insertResult = await db
        .insert(usersTable)
        .values({
          login: credentials.login,
          password: hashPassword,
        })
        .returning();

      createdUserId = insertResult[0].id;
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

    deleteCookie(event, COOKIE.ACCESS_TOKEN);
    const accessToken = createSigner({
      key: process.env.JWT_SECRET,
      sub: credentials.login,
      expiresIn: Date.now() + TOKEN_EXPIRATION_TIMES.ACCESS,
    })({});
    setCookie(event, COOKIE.ACCESS_TOKEN, accessToken, {
      expires: new Date(Date.now() + TOKEN_EXPIRATION_TIMES.ACCESS),
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    deleteCookie(event, COOKIE.REFRESH_TOKEN);
    const refreshToken = createSigner({
      key: process.env.JWT_SECRET,
      sub: credentials.login,
      expiresIn: Date.now() + TOKEN_EXPIRATION_TIMES.REFRESH,
    })({});
    setCookie(event, COOKIE.REFRESH_TOKEN, refreshToken, {
      expires: new Date(Date.now() + TOKEN_EXPIRATION_TIMES.REFRESH),
      httpOnly: true,
      secure: true,
      sameSite: true,
      path: "/api/users/signup/refresh",
    });

    setResponseStatus(event, 201);
    return {
      id: createdUserId,
      login: credentials.login,
    };
  },
});
