<template>
  <ul
    :aria-label="'Steps to complete your goal'"
    :aria-labelledby="props.goalId"
    class="flex flex-row justify-start gap-(--offset__3)"
  >
    <UserGoalStep
      v-for="step in props.steps"
      :step
      :colors="colors[6]"
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

/**
 * **On light theme:**
 * - `border`- medium
 * - `bg` - light
 * - `text` - dark
 * ------
 * **On dark theme:**
 * - `border`- medium
 * - `bg` - dark
 * - `text` - light
 */
const colors: StepColors[] = [
  // purple
  {
    border: "border-(--color-purple__4) dark:border-(--color-purple__2)",
    bg: "bg-(--color-purple__3) dark:bg-(--color-purple__0)",
    text: "text-(--color-purple__5)! dark:text-(--color-purple__1)!",
  },
  // green
  {
    border: "border-(--color-green__4) dark:border-(--color-green__2)",
    bg: "bg-(--color-green__3) dark:bg-(--color-green__6)",
    text: "text-(--color-green__5)! dark:text-(--color-green__1)!",
  },
  // red
  {
    border: "border-(--color-red__4) dark:border-(--color-red__2)",
    bg: "bg-(--color-red__3) dark:bg-(--color-red__0)",
    text: "text-(--color-red__5)! dark:text-(--color-red__1)!",
  },
  // teal
  {
    border: "border-(--color-teal__4) dark:border-(--color-teal__2)",
    bg: "bg-(--color-teal__3) dark:bg-(--color-teal__0)",
    text: "text-(--color-teal__5)! dark:text-(--color-teal__1)!",
  },
  // blue
  {
    border: "border-(--color-blue__4) dark:border-(--color-blue__2)",
    bg: "bg-(--color-blue__3) dark:bg-(--color-blue__0)",
    text: "text-(--color-blue__5)! dark:text-(--color-blue__1)!",
  },
  // yellow
  {
    border: "border-(--color-yellow__4) dark:border-(--color-yellow__2)",
    bg: "bg-(--color-yellow__3) dark:bg-(--color-yellow__0)",
    text: "text-(--color-yellow__5)! dark:text-(--color-yellow__1)!",
  },
  // pink
  {
    border: "border-(--color-pink__4) dark:border-(--color-pink__2)",
    bg: "bg-(--color-pink__3) dark:bg-(--color-pink__0)",
    text: "text-(--color-pink__5)! dark:text-(--color-pink__1)!",
  },
];
function getStepColor() {
  return colors[0];
}
</script>

<style scoped></style>
