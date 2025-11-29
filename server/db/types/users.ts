import { usersTable } from "../schema/users";

export type UserSelectType = typeof usersTable.$inferSelect;
