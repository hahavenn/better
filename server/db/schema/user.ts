import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  login: text({ length: 20 }).primaryKey().unique().notNull(),
  password: text({ length: 60 }).notNull(),
});
