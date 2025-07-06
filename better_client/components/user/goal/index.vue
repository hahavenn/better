<template>
  <article class="flex flex-col gap-(--offset__2)">
    <UserGoalHeader
      :goalId
      :name="goalsStore.goals[0].name"
      :description="goalsStore.goals[0].description"
      :completePercent="
        (goalsStore.calcCompletedParts(goalsStore.goals[0]) /
          goalsStore.calcTotalParts(goalsStore.goals[0])) *
        100
      "
    />

    <UserGoalProgress
      :goalId
      :goal="goalsStore.goals[0]"
      :progress="{
        completed: goalsStore.calcCompletedParts(goalsStore.goals[0]),
        total: goalsStore.calcTotalParts(goalsStore.goals[0]),
      }"
    />

    <UserGoalSteps
      :goalId
      :steps="goalsStore.goals[0].steps"
    />
  </article>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

const goalsStore = useGoalsStore();

const goalId = useId();
</script>

<style scoped></style>
