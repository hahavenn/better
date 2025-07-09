<template>
  <ul
    :aria-label="'Steps to complete your goal'"
    :aria-labelledby="goalIdInject.toString()"
    class="grid-rows-masonry grid w-full grid-flow-row-dense grid-cols-1 gap-(--offset__3) md:grid-cols-3 xl:grid-cols-5"
  >
    <UserGoalStep
      v-for="step in props.steps"
      :key="step.id"
      :step
      :palette="pickPalette()"
    />
  </ul>
</template>

<script lang="ts" setup>
import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";

import type { UserGoal } from "~/stores/goals/types";
import type { ColorPalettes } from "~/types/color_palettes";

import { goalIdKey } from "~/components/user/goal/provide_inject";

import UserGoalStep from "./UserGoalStep.vue";

const props = defineProps<{
  steps: UserGoal["steps"];
}>();
const goalIdInject = inject(goalIdKey) as UserGoal["id"];

function pickPalette() {
  return Object.keys(COLOR_PALETTES_STYLES)[
    Math.floor(Math.random() * Object.keys(COLOR_PALETTES_STYLES).length)
  ] as ColorPalettes;
}
</script>

<style scoped></style>
