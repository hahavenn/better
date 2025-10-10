import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const goalsTable = sqliteTable("goals_table", {
  id: integer().primaryKey().unique(),
});
