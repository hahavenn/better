import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: integer().primaryKey().unique().notNull(),
  login: text({ length: 20 }).unique().notNull(),
  password: text({ length: 60 }).notNull(),
});
