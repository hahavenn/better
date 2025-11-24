import { describe, test } from "vitest";
import { v4 } from "uuid";
import { createSigner } from "fast-jwt";

import useFetch from "../../../app/hooks/useFetch";

import signUpUser from "../../helpers/user/signUp";
import signInUser from "../../helpers/user/signIn";

import type { AuthRefreshResponse } from "../../../shared/types/response/auth/refresh";
import type { ErrorResponse } from "../../../shared/types/response/error";

import COOKIE from "../../../server/constants/cookie";
import TOKEN_EXPIRATION_IN_TIME from "../../../server/constants/token";

const refreshUrl = "/api/auth/refresh";

const user = {
  login: "hahavenn_refresh",
  password: "hahavenn",
};

const accessJWTRegex =
  /access_jwt=([A-Za-z0-9-._~%]{1,}\.[A-Za-z0-9-._~%]{1,}\.[A-Za-z0-9-._~%]{1,}); Max-Age=900; Path=\/; HttpOnly; Secure; SameSite=Strict/;
const refreshJWTRegex =
  /refresh_jwt=([A-Za-z0-9-._~%]{1,}\.[A-Za-z0-9-._~%]{1,}\.[A-Za-z0-9-._~%]{1,}); Max-Age=21600; Path=\/api\/auth\/refresh; HttpOnly; Secure; SameSite=Strict/;

describe(refreshUrl, () => {
  test("Get new pair jwt's", async ({ expect }) => {
    const signUpUserResponse = await signUpUser(user);
    if (!signUpUserResponse) throw `No sign up user response`;

    if (!signUpUserResponse.setCookies[2]) {
      throw "setCookies changed";
    }

    const response = await useFetch<AuthRefreshResponse, ErrorResponse>({
      url: refreshUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        userId: signUpUserResponse.userId,
      },
      headers: {
        Cookie: signUpUserResponse.setCookies[2]!,
      },
    });

    if (!response || "message" in response) {
      throw `Invalid response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(200);
    expect(response.userId).toBe(signUpUserResponse.userId);

    const containsAccessJWT = response.setCookies.some((c) =>
      Boolean(c.match(accessJWTRegex))
    );
    expect(containsAccessJWT).toBe(true);
    const containsRefreshJWT = response.setCookies.some((c) =>
      Boolean(c.match(refreshJWTRegex))
    );
    expect(containsRefreshJWT).toBe(true);
  });

  test("Use self-signed refresh jwt", async ({ expect }) => {
    const signUpUserResponse = await signInUser(user);
    if (!signUpUserResponse) throw `No sign up user response`;

    if (!signUpUserResponse.setCookies[2]) {
      throw "setCookies changed";
    }

    const someSelfCreatedToken = createSigner({
      key: process.env["JWT_SECRET"],
      sub: signUpUserResponse.userId,
      expiresIn: TOKEN_EXPIRATION_IN_TIME.REFRESH,
      jti: v4(),
    })({});

    const response = await useFetch<AuthRefreshResponse, ErrorResponse>({
      url: refreshUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        userId: signUpUserResponse.userId,
      },
      headers: {
        Cookie: signUpUserResponse.setCookies[2].replace(
          /refresh_jwt=[^;]*/,
          `refresh_jwt=${someSelfCreatedToken}`
        ),
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.message).toBe("Unauthorized");
    expect(response.statusCode).toBe(401);

    const access_jwt = response.setCookies.find((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    if (!access_jwt) throw "No access_jwt cookie";
    expect(access_jwt.includes("Max-Age=0")).toBe(true);

    const refresh_jwt = response.setCookies.find((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    if (!refresh_jwt) throw "No refresh_jwt cookie";
    expect(refresh_jwt.includes("Max-Age=0")).toBe(true);
  });

  test("Try used refresh token for another usage", async ({ expect }) => {
    const signUpUserResponse = await signInUser(user);
    if (!signUpUserResponse) throw `No sign up user response`;

    if (!signUpUserResponse.setCookies[2]) {
      throw "setCookies changed";
    }

    // Take new jwt pair
    const response1 = await useFetch<AuthRefreshResponse, ErrorResponse>({
      url: refreshUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        userId: signUpUserResponse.userId,
      },
      headers: {
        Cookie: signUpUserResponse.setCookies[2],
      },
    });

    if (!response1 || "message" in response1) {
      throw `Invalid response - ${JSON.stringify(response1)}`;
    }

    expect(response1.statusCode).toBe(200);
    expect(response1.userId).toBe(signUpUserResponse.userId);

    const containsAccessJWT1 = response1.setCookies.some((c) =>
      Boolean(c.match(accessJWTRegex))
    );
    expect(containsAccessJWT1).toBe(true);
    const containsRefreshJWT1 = response1.setCookies.some((c) =>
      Boolean(c.match(refreshJWTRegex))
    );
    expect(containsRefreshJWT1).toBe(true);

    // Now our first refresh jwt should be invalid and removed from active tokes
    const response2 = await useFetch<AuthRefreshResponse, ErrorResponse>({
      url: refreshUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        userId: signUpUserResponse.userId,
      },
      headers: {
        Cookie: signUpUserResponse.setCookies[2],
      },
    });

    if (!response2 || !("message" in response2)) {
      throw `Invalid response - ${JSON.stringify(response2)}`;
    }

    expect(response2.statusCode).toBe(401);
    expect(response2.message).toBe("Unauthorized");

    const containsAccessJWT2 = response2.setCookies.find((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    if (!containsAccessJWT2) throw "No access_jwt cookie";
    expect(containsAccessJWT2.includes("Max-Age=0")).toBe(true);

    const containsRefreshJWT2 = response2.setCookies.find((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    if (!containsRefreshJWT2) throw "No refresh_jwt cookie";
    expect(containsRefreshJWT2.includes("Max-Age=0")).toBe(true);
  });

  /** @todo add test */
  test("Use expired refresh jwt");
});
