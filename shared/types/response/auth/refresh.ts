import type { User } from "~~/shared/types/user";

export type AuthRefreshResponse = {
  userId: User["id"];
};
