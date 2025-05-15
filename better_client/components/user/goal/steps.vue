<template>
  <ul
    :aria-label="'Steps to complete your goal'"
    :aria-labelledby="props.goalId"
    class="flex flex-row justify-start gap-(--offset__3)"
  >
    <UserGoalStep
      v-for="step in props.steps"
      :step
      :colors="colors[0]"
    />
  </ul>
</template>

<script lang="ts" setup>
import type { UserGoal } from "~/stores/goals/types";
import type { StepColors } from "./types";

const props = defineProps<{
  /**
   * Id of head element with goal name (a11y)
   */
  goalId: string;
  /**
   * Steps of goal to complete
   */
  steps: UserGoal["steps"];
}>();

const colors: StepColors[] = [
  // purple
  {
    border: "border-(--color-purple__4) dark:border-(--color-purple__2)",
    bg: "bg-(--color-purple__3) dark:bg-(--color-purple__0)",
    text: "text-(--color-purple__5)! dark:text-(--color-purple__1)!",
  },
];
function getStepColor() {
  return colors[0];
}
</script>

<style scoped></style>
