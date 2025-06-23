<template>
  <ul
    :aria-label="'Steps to complete your goal'"
    :aria-labelledby="props.goalId"
    class="grid-rows-masonry grid w-full grid-flow-row-dense grid-cols-1 gap-(--offset__3) md:grid-cols-3 xl:grid-cols-5"
  >
    <UserGoalStep
      v-for="step in props.steps"
      :step
      :palette="pickPalette()"
    />
  </ul>
</template>

<script lang="ts" setup>
import { COLOR_PALETTES } from "~/constants/colors";
import type { UserGoal } from "~/stores/goals/types";

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

function pickPalette() {
  return Object.keys(COLOR_PALETTES)[
    Math.floor(Math.random() * Object.keys(COLOR_PALETTES).length)
  ] as keyof typeof COLOR_PALETTES;
}
</script>

<style scoped></style>
