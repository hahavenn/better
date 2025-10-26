import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  /**
   * User id in uuid v4 format
   */
  id: text().primaryKey().unique().notNull(),

  /**
   * User login
   */
  login: text({ length: 20 }).unique().notNull(),

  /**
   * User hashed password
   */
  password: text({ length: 60 }).notNull(),
});
