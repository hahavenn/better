import { createVerifier, TokenError } from "fast-jwt";
import z from "zod";

import COOKIE from "~~/server/constants/cookie";

const RefreshSchema = z.object({
  userId: z.uuid({
    version: "v4",
    error: "User id should be in uuid v4 format",
  }),
});

export default defineEventHandler({
  async handler(event) {
    const refreshParse = RefreshSchema.safeParse(await readBody(event));
    if (!refreshParse.success) {
      setResponseStatus(event, 400);
      return {
        message: refreshParse.error.issues[0].message,
      };
    }
    const userId = refreshParse.data.userId;

    const refreshToken = getCookie(event, COOKIE.REFRESH_TOKEN);
    if (refreshToken === undefined) {
      console.log("cookie exp");

      setResponseStatus(event, 401);
      return { message: "Unauthorized" };
    }

    const verify = createVerifier({ key: process.env.JWT_SECRET });
    let payload: unknown = null;
    try {
      payload = verify(refreshToken);
    } catch (error) {
      if (error instanceof TokenError) {
        console.log("verify error", error.code);

        setResponseStatus(event, 401);
        return { message: "Unauthorized" };
      } else {
        console.log("fatal error", error);

        logger(error);
        setResponseStatus(event, 500);
        return { message: "Fatal" };
      }
    }
    if (!isJwtPayload(payload)) {
      console.log("payload is not jwt", payload);

      setResponseStatus(event, 400);
      return { message: "Invalid token payload" };
    }
    if (payload.sub !== userId) {
      console.log("invalid userId", payload.sub, userId);

      setResponseStatus(event, 401);
      return { message: "Unauthorized" };
    }

    setJwt(event, {
      type: "access",
      userId,
    });
    setJwt(event, {
      type: "refresh",
      userId,
    });

    return {
      id: userId,
    };
  },
});
