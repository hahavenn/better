import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./users";

// #region goal
export const goalsTable = sqliteTable("goals", {
  /**
   * User identifier, that owns goal
   *
   * @todo add see link in docs
   * @see `server/db/schema/user.ts`
   */
  user: text()
    .references(() => usersTable.login)
    .notNull(),

  /**
   * Unique uuid identifier of user goal
   */
  id: text().unique().notNull(),

  /**
   * Name of user goal
   */
  name: text().notNull(),

  /**
   * Description of user goal
   */
  description: text(),
});
// #endregion goal

// #region step
export const stepsTable = sqliteTable("steps_table", {
  /**
   * Unique uuid identifier of goal's step
   */
  id: text().unique().notNull(),

  /**
   * Foreign identifier of relative goal
   */
  goalId: text()
    .references(() => goalsTable.id)
    .notNull(),

  /**
   * Name of user step
   */
  name: text().notNull(),

  /**
   * Description of user step
   */
  description: text(),

  /**
   * Complete state of step
   */
  complete: integer({ mode: "boolean" }).notNull(),
});
// #endregion step

// #region subStep
export const subStepsTable = sqliteTable("sub_steps_table", {
  /**
   * Unique uuid identifier of steps's sub-step
   */
  id: text().unique().notNull(),

  /**
   * Foreign identifier of relative step
   */
  stepId: text()
    .references(() => stepsTable.id)
    .notNull(),

  /**
   * Name of user sub-step
   */
  name: text().notNull(),

  /**
   * Description of user sub-step
   */
  description: text(),

  /**
   * Complete state of sub-step
   */
  complete: integer({ mode: "boolean" }).notNull(),
});
// #endregion subStep
