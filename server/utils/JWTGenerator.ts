import { createSigner } from "fast-jwt";

import type { User } from "~~/shared/types/user";

import db from "../db";
import { refreshTokensTable } from "../db/schema/refreshTokens";

import COOKIE from "../constants/cookie";
import TOKEN_EXPIRATION_IN_TIME from "../constants/token";
import LOG_TYPES from "../constants/logs";
import { v4 } from "uuid";

/**
 * Generator to work with access+refresh jwt's
 *
 * @param event event variable for working with cookies
 * @param userId id of user, that need new pair of access&refresh jwt's
 *
 * @description
 * Yields order+operations:
 * 1. Remove access&refresh cookies
 * 2. Add refresh token to database of active refresh tokens + set access&refresh jwt's to cookie. If error occurred - return error message (response code already was set in generator)
 *
 * @example
 * ```typescript
 * export default defineEventHandler({
 *   async handler(event) {
 *     // some previous code
 *
 *     // init generator
 *     const jwtGen = JWTGenerator(event, userId);
 *
 *     // 1st call for remove old cookies
 *     await jwtGen.next();
 *
 *     // some other handler code
 *
 *     // 2nd and final call for see result of writing refresh token to database
 *     const successJWTSet = await jwtGen.next();
 *     if (successJWTSet.value?.message !== undefined) {
 *       // if generator return message - error happened, response code was set. Just return message to requester
 *       return { message: successJWTSet.value.message };
 *     }
 *
 *     // other code if writing new refresh token to database is successful
 *   }
 * })
 * ```
 */
export default async function* JWTGenerator(event: any, userId: User["id"]) {
  deleteCookie(event, COOKIE.ACCESS_JWT);
  deleteCookie(event, COOKIE.REFRESH_JWT);
  yield;

  const accessJWT = createSigner({
    key: process.env.JWT_SECRET,
    sub: userId,
    expiresIn: TOKEN_EXPIRATION_IN_TIME.ACCESS,
    jti: v4(),
  })({});
  const refreshJWT = createSigner({
    key: process.env.JWT_SECRET,
    sub: userId,
    expiresIn: TOKEN_EXPIRATION_IN_TIME.REFRESH,
    jti: v4(),
  })({});

  try {
    await db.insert(refreshTokensTable).values({
      token: refreshJWT,
      userId,
      expiresAt: new Date(
        Date.now() + TOKEN_EXPIRATION_IN_TIME.REFRESH
      ).toUTCString(),
    });
  } catch (error) {
    logger(error, {
      type: isSQLiteError(error) ? LOG_TYPES.SQLITE : undefined,
    });
    setResponseStatus(event, 500);
    yield { message: "Fatal" };
  }

  setCookie(event, COOKIE.ACCESS_JWT, accessJWT, {
    maxAge: TOKEN_EXPIRATION_IN_TIME.ACCESS / 1000,
    httpOnly: true,
    secure: true,
    sameSite: true,
  });
  setCookie(event, COOKIE.REFRESH_JWT, refreshJWT, {
    maxAge: TOKEN_EXPIRATION_IN_TIME.REFRESH / 1000,
    httpOnly: true,
    secure: true,
    sameSite: true,
    path: "/api/auth/refresh",
  });
}
