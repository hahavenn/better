import type { User } from "~~/shared/types/user";

export type AuthSignUpResponse = {
  userId: User["id"];
  login: User["login"];
};
