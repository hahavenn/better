import type { User } from "~~/shared/types/user";

export type AuthSigninResponse = {
  userId: User["id"];
  login: User["login"];
};
