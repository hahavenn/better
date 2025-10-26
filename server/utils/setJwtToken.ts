import { createSigner } from "fast-jwt";

import COOKIE from "~~/server/constants/cookie";
import TOKEN_EXPIRATION_TIMES from "~~/server/constants/token";

type SetJwtTokenOptions = {
  /**
   * Token type to set
   *
   * @default "access"
   */
  tokenType?: "access" | "refresh";

  /**
   * User login to set in token payload
   */
  login: string;
};

/**
 * Set jwt token to requester
 */
export default function (
  /**
   * `event` object, used in `defineEventHandler`
   */
  event: any,
  options: SetJwtTokenOptions
) {
  const { tokenType = "access", login } = options;

  const cookieTokenName =
    tokenType === "access" ? COOKIE.ACCESS_TOKEN : COOKIE.REFRESH_TOKEN;
  const expiresIn =
    Date.now() +
    (tokenType === "access"
      ? TOKEN_EXPIRATION_TIMES.ACCESS
      : TOKEN_EXPIRATION_TIMES.REFRESH);

  deleteCookie(event, cookieTokenName);
  const token = createSigner({
    key: process.env.JWT_SECRET,
    sub: login,
    expiresIn: expiresIn,
  })({});
  setCookie(event, cookieTokenName, token, {
    expires: new Date(expiresIn),
    httpOnly: true,
    secure: true,
    sameSite: true,
    path: tokenType === "refresh" ? "/api/users/signup/refresh" : undefined,
  });

  console.log("cookieTokenName", cookieTokenName);
  console.log("token", token);
}
