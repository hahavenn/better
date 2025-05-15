type SubStep = {
  name: string;
  description: string;
  complete: boolean;
};

export type UserStep = {
  name: string;
  description: string;
  complete: boolean;
  subSteps: SubStep[];
};
export type UserGoal = {
  name: string;
  description: string;
  complete: boolean;
  steps: UserStep[];
};
