<template>
  <article
    v-if="currGoal"
    class="flex flex-col gap-4"
  >
    <SectionHeader
      :headerId="props.goalId.toString()"
      :header="`Goal: ${currGoal.name} (${completePercent}%)`"
      :description="currGoal.description"
    />

    <ProgressBar
      :ariaLabelledBy="props.goalId.toString()"
      :total
      :completed
    />

    <ul
      :aria-label="'Steps to complete your goal'"
      :aria-labelledby="props.goalId.toString()"
      class="grid-rows-masonry grid w-full grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4"
    >
      <UserGoalStep
        v-for="step in currGoal.steps"
        :key="step.id"
        :step
      />
    </ul>
  </article>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

import { goalIdKey } from "./provideInject";
import type { UserGoal } from "~~/shared/types/goal";

import UserGoalStep from "./components/UserGoalStep.vue";
import ProgressBar from "~/components/shared/ProgressBar/ProgressBar.vue";
import SectionHeader from "~/components/shared/SectionHeader/SectionHeader.vue";

const props = defineProps<{
  goalId: UserGoal["id"];
}>();
provide(goalIdKey, props.goalId);

const goalsStore = useGoalsStore();

const currGoal = computed(() =>
  goalsStore.goals.find((g) => g.id === props.goalId)
);

const completed = computed(() =>
  currGoal.value ? goalsStore.calcCompletedParts(currGoal.value) : 0
);
const total = computed(() =>
  currGoal.value ? goalsStore.calcTotalParts(currGoal.value) : 0
);
const completePercent = computed(() =>
  ((completed.value / total.value) * 100).toFixed(2)
);
</script>

<style scoped></style>
