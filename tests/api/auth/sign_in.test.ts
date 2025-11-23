import { beforeAll, describe, test } from "vitest";

import useFetch from "../../../app/hooks/useFetch";

import type { AuthSignUpResponse } from "../../../shared/types/response/auth/signUp";
import type { ErrorResponse } from "../../../shared/types/response/error";

import resetDb from "../../helpers/db/reset";

import COOKIE from "../../../server/constants/cookie";
import signUpUser from "../../helpers/user/signUp";

const signInUrl = "/api/auth/sign_in";

const user = {
  login: "hahavenn_sign_in",
  password: "hahavenn",
};

describe(signInUrl, () => {
  beforeAll(async () => {
    await resetDb();
    await signUpUser(user);
    return async () => {
      await resetDb();
    };
  });

  test("Sign in an existing user", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: user,
    });

    if (!response || "message" in response) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(200);
    expect(response.login).toBe(user.login);
    expect(response.userId).toBeTypeOf("string");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(true);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(true);
  });

  test("Sign in a non-existing user", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: "admin",
        password: "xXx_big_boss_69_xXx",
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(401);
    expect(response.message).toBe("Invalid login or password");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with incorrect password", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: user.login,
        password: "xXx_big_boss_69_xXx",
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(401);
    expect(response.message).toBe("Invalid login or password");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with invalid login", async ({ expect }) => {
    const invalidLoginResponse = await useFetch<
      AuthSignUpResponse,
      ErrorResponse
    >({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: "admin**#((@(*@*",
        password: "xXx_big_boss_69_xXx",
      },
    });

    if (!invalidLoginResponse || !("message" in invalidLoginResponse)) {
      throw `Incorrect response - ${JSON.stringify(invalidLoginResponse)}`;
    }

    expect(invalidLoginResponse.statusCode).toBe(422);
    expect(invalidLoginResponse.message).toBe(
      "Login can contain only: letters, hieroglyphs, numbers, underscore and dash"
    );

    const containsAccessJWT = invalidLoginResponse.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = invalidLoginResponse.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with long login", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: "hahahahahahahahahahavenn",
        password: "qwerty",
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(422);
    expect(response.message).toBe("Max login length is 20");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with non-string login", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: 123,
        password: "qwerty",
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(422);
    expect(response.message).toBe("Login should be string");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with non-string password", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: "hahavenn",
        password: 123,
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(422);
    expect(response.message).toBe("Password should be string");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with long password", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: "hahavenn",
        password:
          "some very long password above 50 symbols, i don't know how many i need to write, hope it will be enough",
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(422);
    expect(response.message).toBe("Max password length is 50");

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });

  test("Sign in user with incorrect body", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signInUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: 123,
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(422);
    expect(response.message).toBe(
      "Invalid input. Expected { login, password }"
    );

    const containsAccessJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.ACCESS_JWT)
    );
    expect(containsAccessJWT).toBe(false);
    const containsRefreshJWT = response.setCookies.some((c) =>
      c.includes(COOKIE.REFRESH_JWT)
    );
    expect(containsRefreshJWT).toBe(false);
  });
});
