import bcrypt from "bcryptjs";
import z from "zod";

import LOG_TYPES from "~~/server/constants/logs";

import db from "~~/server/db";
import { usersTable } from "~~/server/db/schema/user";

const User = z.object({
  login: z.string().max(20),
  password: z.string().max(50),
});

export default defineEventHandler({
  async handler(event) {
    const parsed = User.safeParse(await readBody(event));

    if (!parsed.success) {
      setResponseStatus(event, 400);
      return {
        details: "Incorrect request body",
      };
    }

    const credentials = parsed.data;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(credentials.password, salt);

    try {
      const result = await db
        .insert(usersTable)
        .values({
          login: credentials.login,
          password: hashPassword,
        })
        .returning();

      return {
        data: result,
      };
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

        return { details: message };
      }

      logger(handled.error);
      setResponseStatus(event, 500);
      return { details: "Fatal" };
    }
  },
});
