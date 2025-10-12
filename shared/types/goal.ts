// #region goal
export type UserGoal = {
  /**
   * Identifier of goal
   */
  id: string;

  /**
   * Name of goal
   */
  name: string;

  /**
   * Description of goal
   */
  description: string;

  /**
   * Completeness state of goal.
   *
   * @description
   * If all steps completed - `true`, otherwise - `false`
   */
  complete: boolean;

  /**
   * Steps of goal
   */
  steps: UserGoalStep[];
};
// #endregion goal

// #region step
export type UserGoalStep = {
  /**
   * Identifier of step
   */
  id: string;

  /**
   * Name of step
   */
  name: string;

  /**
   * Description of step
   */
  description: string;

  /**
   * Completeness state of step.
   *
   * @description
   * If all sub-steps completed - `true`, otherwise - `false`
   */
  complete: boolean;

  /**
   * Sub-steps of step
   */
  subSteps: UserGoalSubStep[];
};
// #endregion step

// #region subStep
export type UserGoalSubStep = {
  /**
   * Identifier of sub-step
   */
  id: string;

  /**
   * Name of sub-step
   */
  name: string;

  /**
   * Description of sub-step
   */
  description: string;

  /**
   * Completeness state of sub-step
   */
  complete: boolean;
};
// #endregion subStep
