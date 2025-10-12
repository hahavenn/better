import { sqliteTable, text } from "drizzle-orm/sqlite-core";

// #region goal
export const goalsTable = sqliteTable("goals_table", {
  /**
   * Unique uuid identifier of user goal
   */
  id: text().primaryKey().unique(),

  /**
   * Name of user goal
   */
  name: text(),

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
  id: text().primaryKey().unique(),

  /**
   * Foreign identifier of relative goal
   */
  goalId: text().references(() => goalsTable.id),

  /**
   * Name of user step
   */
  name: text(),

  /**
   * Description of user step
   */
  description: text(),
});
// #endregion step

// #region subStep
export const subStepsTable = sqliteTable("sub_steps_table", {
  /**
   * Unique uuid identifier of steps's sub-step
   */
  id: text().primaryKey().unique(),

  /**
   * Foreign identifier of relative step
   */
  stepId: text().references(() => stepsTable.id),

  /**
   * Name of user sub-step
   */
  name: text(),

  /**
   * Description of user sub-step
   */
  description: text(),
});
// #endregion subStep
