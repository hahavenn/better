import type { User } from "~~/shared/types/user";

export type AuthSignupResponse = {
  userId: User["id"];
  login: User["login"];
};
