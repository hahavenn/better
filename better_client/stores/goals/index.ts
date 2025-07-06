import { goal } from "./data";
import type { UserGoal } from "./types";

const useGoalsStore = defineStore("goalsStore", () => {
  const _goals = ref<UserGoal[]>([goal]);
  /**
   * All user goals
   */
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

  return {
    goals,
    calcTotalParts,
    calcCompletedParts,
  };
});

export default useGoalsStore;
