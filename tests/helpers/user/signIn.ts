import useFetch from "../../../app/hooks/useFetch";

import type { AuthSignInResponse } from "../../../shared/types/response/auth/signIn";
import type { ErrorResponse } from "../../../shared/types/response/error";

/**
 * Sign in user for testing purposes
 * @param user to sign in
 */
export default async function signInUser(user: {
  login: string;
  password: string;
}) {
  const response = await useFetch<AuthSignInResponse, ErrorResponse>({
    url: "/api/auth/sign_in",
    baseUrl: process.env["SERVER_BASE_URL"],
    method: "POST",
    body: user,
  });

  if (!response || "message" in response) {
    throw `Invalid response - ${JSON.stringify(response)}`;
  }

  return response;
}
