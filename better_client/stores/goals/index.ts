import type { Goal } from "./types";

/**
 * Test goal
 */
const goal: Goal = {
  name: "Become a better developer",
  description: "some description about goal",
  complete: false,
  steps: [
    {
      name: "Learn React",
      description: "some description about react",
      complete: true,
    },
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
    {
      name: "pwa",
      description: "some description about pwa",
      complete: true,
    },
    {
      name: "Learn vue",
      description: "some description about vue",
      complete: true,
    },
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
    {
      name: "pwa_1",
      description: "some description about pwa_1",
      complete: false,
    },
    {
      name: "pwa_2",
      description: "some description about pwa_2",
      complete: false,
    },
    {
      name: "pwa_3",
      description: "some description about pwa_3",
      complete: false,
    },
  ],
};

const useGoalsStore = defineStore("goalsStore", () => {
  const _goals = ref<Goal[]>([goal]);
  const goals = computed(() => _goals.value);

  const selectedGoal = computed(() => goals.value[0]);

  const steps = computed(() => ({
    completed: selectedGoal.value.steps.filter((step) => step.complete).length,
    total: selectedGoal.value.steps.length,
  }));

  /**
   * How much percent completed
   */
  const completed = computed(() => steps.value.completed / steps.value.total);

  return {
    goals,
    selectedGoal,
    steps,
    completed,
  };
});

export default useGoalsStore;
