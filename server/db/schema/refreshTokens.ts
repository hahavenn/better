import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const refreshTokensTable = sqliteTable("refresh_tokens_table", {
  /**
   * Active refresh token
   */
  token: text().primaryKey().unique(),

  /**
   * Id of user who owns this refresh token
   */
  userId: text().notNull(),

  /**
   * Time in UTC when token expires
   */
  expiresAt: text().notNull(),
});
