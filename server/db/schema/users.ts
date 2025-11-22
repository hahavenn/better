import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  /**
   * User id in uuid v4 format
   */
  id: text().primaryKey().unique(),

  /**
   * User login
   */
  login: text({ length: 20 }).unique().notNull(),

  /**
   * User hashed password
   */
  password: text({ length: 60 }).notNull(),

  /**
   * Time when happened last update of user data in UTC format
   */
  updatedAt: text().notNull(),
});
