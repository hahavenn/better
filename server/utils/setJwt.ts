import { createSigner } from "fast-jwt";

import COOKIE from "~~/server/constants/cookie";
import TOKEN_EXPIRATION_TIMES from "~~/server/constants/token";

import type { User } from "~~/shared/types/user";

type SetJwtOptions = {
  /**
   * Token type to set
   *
   * @default "access"
   */
  tokenType?: "access" | "refresh";

  /**
   * User id to set in token payload
   */
  userId: User["id"];
};

/**
 * Set jwt to requester
 */
export default function (
  /**
   * `event` object, used in `defineEventHandler`
   */
  event: any,
  options: SetJwtOptions
) {
  const { tokenType = "access", userId } = options;

  const cookieTokenName =
    tokenType === "access" ? COOKIE.ACCESS_TOKEN : COOKIE.REFRESH_TOKEN;
  const expiresIn =
    tokenType === "access"
      ? TOKEN_EXPIRATION_TIMES.ACCESS
      : TOKEN_EXPIRATION_TIMES.REFRESH;

  deleteCookie(event, cookieTokenName);

  const tokenSigner = createSigner({
    key: process.env.JWT_SECRET,
    sub: userId,
    expiresIn,
  });
  const token = tokenSigner({});

  setCookie(event, cookieTokenName, token, {
    expires: new Date(Date.now() + expiresIn),
    httpOnly: true,
    secure: true,
    sameSite: true,
    path: tokenType === "access" ? undefined : "/api/auth/signup",
  });
}
