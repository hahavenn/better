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
      :goalId="goalId"
      :goal="goalsStore.goals[0]"
      :progress="{
        completed: goalsStore.calcCompletedParts(goalsStore.goals[0]),
        total: goalsStore.calcTotalParts(goalsStore.goals[0]),
      }"
    />

    <UserGoalSteps :steps="goalsStore.goals[0].steps" />
  </article>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

const goalsStore = useGoalsStore();

const goalId = useId();

onMounted(() => {
  console.log("goalsStore.goals", goalsStore.goals);
  console.log("total", goalsStore.calcTotalParts(goalsStore.goals[0]));
  console.log("completed", goalsStore.calcCompletedParts(goalsStore.goals[0]));
});
</script>

<style scoped></style>
