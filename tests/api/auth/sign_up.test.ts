import { describe, test } from "vitest";

import useFetch from "../../../app/hooks/useFetch";

import type { AuthSignUpResponse } from "../../../shared/types/response/auth/signUp";
import type { ErrorResponse } from "../../../shared/types/response/error";

import COOKIE from "../../../server/constants/cookie";

const signUpUrl = "/api/auth/sign_up";

const user = {
  login: "hahavenn_sign_up",
  password: "hahavenn",
};

describe(signUpUrl, () => {
  test("Sign up a new user", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: user,
    });

    if (!response || "message" in response) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(201);
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

  test("Sign up an existing user", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: user,
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(409);
    expect(response.message).toBe(
      `User with login '${user.login}' already exist`
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

  test("Sign up a new user with invalid login", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
      baseUrl: process.env["SERVER_BASE_URL"],
      method: "POST",
      body: {
        login: "*1&@!!!",
        password: "qwerty",
      },
    });

    if (!response || !("message" in response)) {
      throw `Incorrect response - ${JSON.stringify(response)}`;
    }

    expect(response.statusCode).toBe(422);
    expect(response.message).toBe(
      "Login can contain only: letters, hieroglyphs, numbers, underscore and dash"
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

  test("Sign up a new user with long login", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
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

  test("Sign up a new user with non-string login", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
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

  test("Sign up a new user with non-string password", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
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

  test("Sign up a new user with long password", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
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

  test("Sign up a new user with incorrect body", async ({ expect }) => {
    const response = await useFetch<AuthSignUpResponse, ErrorResponse>({
      url: signUpUrl,
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
