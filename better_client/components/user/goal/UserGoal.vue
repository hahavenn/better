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

    <UserGoalSteps :steps="currGoal.steps" />
  </article>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

import type { UserGoal } from "~/stores/goals/types";

import { goalIdKey } from "./provide_inject";

import UserGoalHeader from "./components/UserGoalHeader.vue";
import UserGoalProgress from "./components/UserGoalProgress.vue";
import UserGoalSteps from "./components/UserGoalSteps.vue";

const props = defineProps<{
  goalId: UserGoal["id"];
}>();
provide(goalIdKey, props.goalId);

const goalsStore = useGoalsStore();

const currGoal = computed(() =>
  goalsStore.goals.find((g) => g.id === props.goalId)
);
</script>

<style scoped></style>
