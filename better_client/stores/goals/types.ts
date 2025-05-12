type Step = {
  name: string;
  description: string;
  complete: boolean;
  subSteps: SubStep[];
};

type SubStep = {
  name: string;
  description: string;
  complete: boolean;
};

export type UserGoal = {
  name: string;
  description: string;
  complete: boolean;
  steps: Step[];
};
