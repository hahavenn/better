import type { UserGoal } from "./types";

/**
 * Test goal
 */
const goal: UserGoal = {
  name: "Become a better developer",
  description: "some description about goal",
  complete: false,
  steps: [
    {
      name: "Learn React",
      description: "some description about react",
      complete: true,
      subSteps: [
        {
          name: "react_1",
          description: "description react_1",
          complete: true,
        },
        {
          name: "react_2",
          description: "description react_2",
          complete: true,
        },
        {
          name: "react_3",
          description: "description react_3",
          complete: true,
        },
        {
          name: "react_4",
          description: "description react_4",
          complete: true,
        },
      ],
    },
    {
      name: "pwa",
      description: "some description about pwa",
      complete: true,
      subSteps: [],
    },
    {
      name: "Learn vue",
      description: "some description about vue",
      complete: false,
      subSteps: [
        {
          name: "vue_1",
          description: "description vue_1",
          complete: true,
        },
        {
          name: "vue_2",
          description: "description vue_2",
          complete: false,
        },
      ],
    },
    {
      name: "bun_1",
      description: "some description about bun_1",
      complete: false,
      subSteps: [],
    },
    {
      name: "bun_2",
      description: "some description about bun_2",
      complete: false,
      subSteps: [],
    },
    {
      name: "bun_3",
      description: "some description about bun_3",
      complete: false,
      subSteps: [],
    },
  ],
};

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
