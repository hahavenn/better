import type { UserGoalSubStep, UserGoal, UserGoalStep } from "./types";

import { goal } from "./data";

const useGoalsStore = defineStore("goalsStore", () => {
  const _goals = ref<UserGoal[]>([goal]);
  /** All user goals */
  const goals = computed(() => _goals.value);

  /**
   * How much total parts of user goal.
   * If step has zero subSteps - than `+1` part.
   * If step has subSteps - than `+subSteps.length`.
   *
   * @returns total parts of user goal
   */
  function calcTotalParts(goal: UserGoal) {
    return goal.steps.reduce(
      (acc, step) =>
        acc + (step.subSteps.length > 0 ? step.subSteps.length : 1),
      0
    );
  }
  /**
   * How much completed parts of user goal.
   * If step has zero subSteps - looking for `step.complete`.
   * If step has subSteps - look how much of subSteps are completed.
   *
   * @returns amount of completed parts of user goal
   */
  function calcCompletedParts(goal: UserGoal) {
    return goal.steps.reduce(
      (acc, step) =>
        acc +
        (step.subSteps.length > 0
          ? step.subSteps.filter((s) => s.complete).length
          : step.complete
            ? 1
            : 0),
      0
    );
  }

  /**
   * Update goal completeness.
   *
   * Cases:
   * - `goalId` provided -> all steps' and subSteps' `complete` state will be set equals goal state
   * - `goalId`, `stepId`, provided -> only step and itself subSteps `complete` state will be changed
   * - `goalId`, `stepId`, `subStepId` provided -> update only subStep state
   *
   * @returns No return value provided. For updates you should look for `goals` variable
   */
  function updateGoalCompleteness(
    params: {
      goalId: UserGoal["id"];
      stepId?: UserGoalStep["id"];
      subStepId?: UserGoalSubStep["id"];
    },
    state = false
  ) {
    for (const goal of _goals.value) {
      // wrong goal
      if (goal.id !== params.goalId) continue;

      // whole goal should be changed
      if (params.stepId === undefined) {
        goal.complete = state;

        // these cycles updates whole goal, so we don't need to check all steps and subSteps
        goal.steps.forEach((step) => {
          step.subSteps.forEach((subStep) => {
            subStep.complete = state;
          });
          step.complete = state;
        });
      } else {
        for (const step of goal.steps) {
          // wrong step
          if (step.id !== params.stepId) continue;

          // whole step should be updated
          if (params.subStepId === undefined) {
            step.complete = state;

            step.subSteps.forEach((subStep) => {
              subStep.complete = state;
            });
          } else {
            for (const subStep of step.subSteps) {
              // wrong subStep
              if (subStep.id !== params.subStepId) continue;

              // update subStep
              subStep.complete = state;
            }
          }

          // check for whole step completed
          step.complete = !Boolean(
            step.subSteps.find((subStep) => !subStep.complete)
          );
        }

        // check for whole goal completed
        goal.complete = !Boolean(goal.steps.find((step) => !step.complete));
      }
    }
  }

  return {
    goals,

    calcTotalParts,
    calcCompletedParts,

    updateGoalCompleteness,
  };
});

export default useGoalsStore;
