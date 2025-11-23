import useFetch from "../../../app/hooks/useFetch";

import type { AuthSignupResponse } from "../../../shared/types/response/auth/signup";
import type { ErrorResponse } from "../../../shared/types/response/error";

/**
 * Sign up user for testing purposes
 * @param user to sign up
 */
export default async function signUpUser(user: {
  login: string;
  password: string;
}) {
  const response = await useFetch<AuthSignupResponse, ErrorResponse>({
    url: "/api/auth/sign_up",
    baseUrl: process.env["SERVER_BASE_URL"],
    method: "POST",
    body: user,
  });

  if (!response || "message" in response) {
    throw `Invalid response - ${JSON.stringify(response)}`;
  }

  return response;
}
