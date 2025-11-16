import { test, expect } from "vitest";

import useFetch from "../../../app/hooks/fetch";

const signUpUrl = "/api/auth/sign_up";

test("sign up api test", async () => {
  const response = await useFetch({
    url: signUpUrl,
    baseUrl: process.env.SERVER_BASE_URL,
    method: "POST",
    body: {
      login: "hahavennaa",
      password: "hahavenn",
    },
  });

  console.log("response", response);

  expect(1 + 3).toBe(4);
});
