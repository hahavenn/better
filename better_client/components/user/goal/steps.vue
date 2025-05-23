<template>
  <ul
    :aria-label="'Steps to complete your goal'"
    :aria-labelledby="props.goalId"
    class="flex flex-row justify-start gap-(--offset__3)"
  >
    <UserGoalStep
      v-for="step in props.steps"
      :step
      :colors="colors[9]"
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
 * - `bg` - lighter
 * - `text` - darker
 * ------
 * **On dark theme:**
 * - `border`- medium
 * - `bg` - darker
 * - `text` - lighter
 */
const colors: StepColors[] = [
  // Dark Red
  {
    border: "border-(--color-dark-red__4) dark:border-(--color-dark-red__2)",
    bg: "bg-(--color-dark-red__3) dark:bg-(--color-dark-red__0)",
    text: "text-(--color-dark-red__5)! dark:text-(--color-dark-red__1)!",
  },

  // Red
  {
    border: "border-(--color-red__4) dark:border-(--color-red__2)",
    bg: "bg-(--color-red__3) dark:bg-(--color-red__0)",
    text: "text-(--color-red__5)! dark:text-(--color-red__1)!",
  },

  // Light Red
  {
    border: "border-(--color-light-red__4) dark:border-(--color-light-red__2)",
    bg: "bg-(--color-light-red__3) dark:bg-(--color-light-red__0)",
    text: "text-(--color-light-red__5)! dark:text-(--color-light-red__1)!",
  },

  // Dark Orange
  {
    border:
      "border-(--color-dark-orange__4) dark:border-(--color-dark-orange__2)",
    bg: "bg-(--color-dark-orange__3) dark:bg-(--color-dark-orange__0)",
    text: "text-(--color-dark-orange__5)! dark:text-(--color-dark-orange__1)!",
  },

  // Orange
  {
    border: "border-(--color-orange__4) dark:border-(--color-orange__2)",
    bg: "bg-(--color-orange__3) dark:bg-(--color-orange__0)",
    text: "text-(--color-orange__5)! dark:text-(--color-orange__1)!",
  },

  // Light Orange
  {
    border:
      "border-(--color-light-orange__4) dark:border-(--color-light-orange__2)",
    bg: "bg-(--color-light-orange__3) dark:bg-(--color-light-orange__0)",
    text: "text-(--color-light-orange__5)! dark:text-(--color-light-orange__1)!",
  },

  // Dark Yellow
  {
    border:
      "border-(--color-dark-yellow__4) dark:border-(--color-dark-yellow__2)",
    bg: "bg-(--color-dark-yellow__3) dark:bg-(--color-dark-yellow__0)",
    text: "text-(--color-dark-yellow__5)! dark:text-(--color-dark-yellow__1)!",
  },

  // Yellow
  {
    border: "border-(--color-yellow__4) dark:border-(--color-yellow__2)",
    bg: "bg-(--color-yellow__3) dark:bg-(--color-yellow__0)",
    text: "text-(--color-yellow__5)! dark:text-(--color-yellow__1)!",
  },

  // Light Yellow
  {
    border:
      "border-(--color-light-yellow__4) dark:border-(--color-light-yellow__2)",
    bg: "bg-(--color-light-yellow__3) dark:bg-(--color-light-yellow__0)",
    text: "text-(--color-light-yellow__5)! dark:text-(--color-light-yellow__1)!",
  },

  // Dark Green
  {
    border:
      "border-(--color-dark-green__4) dark:border-(--color-dark-green__2)",
    bg: "bg-(--color-dark-green__3) dark:bg-(--color-dark-green__0)",
    text: "text-(--color-dark-green__5)! dark:text-(--color-dark-green__1)!",
  },

  // Green
  {
    border: "border-(--color-green__4) dark:border-(--color-green__2)",
    bg: "bg-(--color-green__3) dark:bg-(--color-green__0)",
    text: "text-(--color-green__5)! dark:text-(--color-green__1)!",
  },

  // Light Green
  {
    border:
      "border-(--color-light-green__4) dark:border-(--color-light-green__2)",
    bg: "bg-(--color-light-green__3) dark:bg-(--color-light-green__0)",
    text: "text-(--color-light-green__5)! dark:text-(--color-light-green__1)!",
  },

  // Dark Blue
  {
    border: "border-(--color-dark-blue__4) dark:border-(--color-dark-blue__2)",
    bg: "bg-(--color-dark-blue__3) dark:bg-(--color-dark-blue__0)",
    text: "text-(--color-dark-blue__5)! dark:text-(--color-dark-blue__1)!",
  },

  // Blue
  {
    border: "border-(--color-blue__4) dark:border-(--color-blue__2)",
    bg: "bg-(--color-blue__3) dark:bg-(--color-blue__0)",
    text: "text-(--color-blue__5)! dark:text-(--color-blue__1)!",
  },

  // Light Blue
  {
    border:
      "border-(--color-light-blue__4) dark:border-(--color-light-blue__2)",
    bg: "bg-(--color-light-blue__3) dark:bg-(--color-light-blue__0)",
    text: "text-(--color-light-blue__5)! dark:text-(--color-light-blue__1)!",
  },

  // Dark Indigo
  {
    border:
      "border-(--color-dark-indigo__4) dark:border-(--color-dark-indigo__2)",
    bg: "bg-(--color-dark-indigo__3) dark:bg-(--color-dark-indigo__0)",
    text: "text-(--color-dark-indigo__5)! dark:text-(--color-dark-indigo__1)!",
  },

  // Indigo
  {
    border: "border-(--color-indigo__4) dark:border-(--color-indigo__2)",
    bg: "bg-(--color-indigo__3) dark:bg-(--color-indigo__0)",
    text: "text-(--color-indigo__5)! dark:text-(--color-indigo__1)!",
  },

  // Light Indigo
  {
    border:
      "border-(--color-light-indigo__4) dark:border-(--color-light-indigo__2)",
    bg: "bg-(--color-light-indigo__3) dark:bg-(--color-light-indigo__0)",
    text: "text-(--color-light-indigo__5)! dark:text-(--color-light-indigo__1)!",
  },

  // Dark Purple
  {
    border:
      "border-(--color-dark-purple__4) dark:border-(--color-dark-purple__2)",
    bg: "bg-(--color-dark-purple__3) dark:bg-(--color-dark-purple__0)",
    text: "text-(--color-dark-purple__5)! dark:text-(--color-dark-purple__1)!",
  },

  // Purple
  {
    border: "border-(--color-purple__4) dark:border-(--color-purple__2)",
    bg: "bg-(--color-purple__3) dark:bg-(--color-purple__0)",
    text: "text-(--color-purple__5)! dark:text-(--color-purple__1)!",
  },

  // Light Purple
  {
    border:
      "border-(--color-light-purple__4) dark:border-(--color-light-purple__2)",
    bg: "bg-(--color-light-purple__3) dark:bg-(--color-light-purple__0)",
    text: "text-(--color-light-purple__5)! dark:text-(--color-light-purple__1)!",
  },
];
function getStepColor() {
  return colors[0];
}
</script>

<style scoped></style>
