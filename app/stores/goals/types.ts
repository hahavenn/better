export type UserGoalSubStep = {
  id: number;
  name: string;
  description: string;
  complete: boolean;
};

/** Steps of goal to complete */
export type UserGoalStep = {
  id: number;
  name: string;
  description: string;
  complete: boolean;
  subSteps: UserGoalSubStep[];
};
export type UserGoal = {
  id: number;
  name: string;
  description: string;
  complete: boolean;
  steps: UserGoalStep[];
};
