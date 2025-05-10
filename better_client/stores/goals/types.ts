type Step = {
  name: string;
  description: string;
  complete: boolean;
};

export type Goal = {
  name: string;
  description: string;
  complete: boolean;
  steps: Step[];
};
