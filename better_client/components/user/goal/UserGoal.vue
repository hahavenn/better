<template>
  <article
    v-if="currGoal"
    class="flex flex-col gap-(--offset__2)"
  >
    <UserGoalHeader
      :name="currGoal.name"
      :description="currGoal.description"
      :completePercent="(completed / total) * 100"
    />

    <ProgressBar
      :ariaLabelledBy="props.goalId.toString()"
      :total
      :completed
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
      />
    </ul>
  </article>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

import type { UserGoal } from "~/stores/goals/types";
import { goalIdKey } from "./provide_inject";

import UserGoalHeader from "./components/UserGoalHeader.vue";
import UserGoalStep from "./components/UserGoalStep.vue";
import ProgressBar from "~/components/shared/ProgressBar/ProgressBar.vue";

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
</script>

<style scoped></style>
