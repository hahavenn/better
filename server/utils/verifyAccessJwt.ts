import { createVerifier, TokenError } from "fast-jwt";

import type { User } from "~~/shared/types/user";

import COOKIE from "../constants/cookie";

/**
 * JWT payload
 *
 * @see https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields
 */
type JwtPayload = {
  sub: string;
  iat: number;
  exp: number;
};
function isJwtPayload(payload: unknown): payload is JwtPayload {
  const p = payload as any;

  return [
    "sub" in p && typeof p.sub === "string",
    "iat" in p && typeof p.iat === "number",
    "exp" in p && typeof p.exp === "number",
  ].every((condition) => condition === true);
}

/**
 * Verify access jwt.
 *
 * @description
 * Verify access token with comparing provided userId param and payload userId.
 * This verifier also sets response status code with describing message.
 *
 * @param event variable in `defineEventHandler`
 * @param userId to compare with userId in token payload object
 * @returns object with status of verification and additional message if validation failed
 *
 * @example
 * ```typescript
 * export default defineEventHandler({
 *   async handler(event) {
 *     const verified = verifyAccessJwt(
 *       event,
 *       userId
 *     );
 *
 *     if(!verified.ok) return { message: verified.message }
 *
 *     // other code if verification complete and passed
 *   }
 * })
 * ```
 */
export default function (event: any, userId: User["id"]) {
  const accessToken = getCookie(event, COOKIE.ACCESS_TOKEN);
  if (accessToken === undefined) {
    setResponseStatus(event, 401);
    return { ok: false, message: "Unauthorized" } as const;
  }

  const verify = createVerifier({ key: process.env.JWT_SECRET });

  let payload: unknown = null;
  try {
    payload = verify(accessToken);
  } catch (error) {
    if (error instanceof TokenError) {
      setResponseStatus(event, 401);
      return { ok: false, message: "Unauthorized" } as const;
    } else {
      logger(error);
      setResponseStatus(event, 500);
      return { ok: false, message: "Fatal" } as const;
    }
  }
  if (!isJwtPayload(payload)) {
    setResponseStatus(event, 500);
    return { ok: false, message: "Fatal" } as const;
  }

  if (payload.sub !== userId) {
    setResponseStatus(event, 401);
    return { ok: false, message: "Unauthorized" } as const;
  }

  return {
    ok: true,
  } as const;
}
