import z from "zod";

/**
 * User credentials zod schema
 */
const UserCredentialsZodSchema = z.object(
  {
    login: z
      .string("Login should be string")
      .refine((login) => /^[\p{L}\d_-]+$/u.test(login), {
        error:
          "Login can contain only: letters, hieroglyphs, numbers, underscore and dash",
      })
      .refine((login) => login.length <= 20, {
        error: "Max login length is 20",
      }),
    password: z
      .string("Password should be string")
      .refine((password) => password.length <= 50, {
        error: "Max password length is 50",
      }),
  },
  { error: "Invalid input. Expected { login, password }" }
);

/**
 * User id zod definition
 */
const UserIdZod = z.uuid({
  version: "v4",
  error: "User id should be in uuid v4 format",
});

export { UserCredentialsZodSchema, UserIdZod };
