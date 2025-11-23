import useFetch from "../../../app/hooks/useFetch";

/**
 * Sign up user for testing purposes
 * @param user to sign up
 */
export default async function signUpUser(user: {
  login: string;
  password: string;
}) {
  await useFetch({
    url: "/api/auth/sign_up",
    baseUrl: process.env["SERVER_BASE_URL"],
    method: "POST",
    body: user,
  });
}
