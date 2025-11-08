import { test, expect } from "vitest";

test("sign up api test", async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/auth/sign_up`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      login: "hahavenn",
      password: "hahavenn",
    }),
  });
  response.headers;
  const data = await response.json();

  console.log("response", data, response.headers);

  expect(1 + 3).toBe(4);
});
