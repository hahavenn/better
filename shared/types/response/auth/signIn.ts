import type { User } from "~~/shared/types/user";

export type AuthSignInResponse = {
  userId: User["id"];
  login: User["login"];
};
