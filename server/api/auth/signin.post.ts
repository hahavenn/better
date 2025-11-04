import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";

import db from "~~/server/db";
import { usersTable } from "~~/server/db/schema/users";
import type { UserSelectType } from "~~/server/db/types/user";

import { UserCredentialsZodSchema } from "~~/server/shared/zod/user";

import type { ErrorResponse } from "~~/shared/types/response/error";
import type { AuthSigninResponse } from "~~/shared/types/response/auth/signin";

import LOG_TYPES from "~~/server/constants/logs";

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
