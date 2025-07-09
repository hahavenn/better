<template>
  <article
    v-if="currGoal"
    class="flex flex-col gap-(--offset__2)"
  >
    <UserGoalHeader
      :name="currGoal.name"
      :description="currGoal.description"
      :completePercent="
        (goalsStore.calcCompletedParts(currGoal) /
          goalsStore.calcTotalParts(currGoal)) *
        100
      "
    />

    <UserGoalProgress
      :progress="{
        completed: goalsStore.calcCompletedParts(currGoal),
        total: goalsStore.calcTotalParts(currGoal),
      }"
    />

    <ul
      :aria-label="'Steps to complete your goal'"
      :aria-labelledby="props.goalId.toString()"
      class="grid-rows-masonry grid w-full grid-flow-row-dense grid-cols-1 gap-(--offset__3) md:grid-cols-3 xl:grid-cols-5"
    >
      <UserGoalStep
        v-for="step in currGoal.steps"
        :key="step.id"
        :step
        :palette="pickPalette()"
      />
    </ul>
  </article>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

import type { UserGoal } from "~/stores/goals/types";
import type { ColorPalettes } from "~/types/color_palettes";

import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";

import { goalIdKey } from "./provide_inject";

import UserGoalHeader from "./components/UserGoalHeader.vue";
import UserGoalProgress from "./components/UserGoalProgress.vue";
import UserGoalStep from "./components/UserGoalStep.vue";

const props = defineProps<{
  goalId: UserGoal["id"];
}>();
provide(goalIdKey, props.goalId);

const goalsStore = useGoalsStore();

const currGoal = computed(() =>
  goalsStore.goals.find((g) => g.id === props.goalId)
);

function pickPalette() {
  return Object.keys(COLOR_PALETTES_STYLES)[
    Math.floor(Math.random() * Object.keys(COLOR_PALETTES_STYLES).length)
  ] as ColorPalettes;
}
</script>

<style scoped></style>
