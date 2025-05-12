<template>
  <section class="flex flex-col gap-(--offset__2)">
    <UserGoalHeader
      :name="goalsStore.goals[0].name"
      :description="goalsStore.goals[0].description"
    />

    <UserGoalProgress :goal="goalsStore.goals[0]" />
  </section>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

const goalsStore = useGoalsStore();

onMounted(() => {
  console.log("goalsStore.goals", goalsStore.goals);
  console.log("total", goalsStore.calcTotalParts(goalsStore.goals[0]));
  console.log("completed", goalsStore.calcCompletedParts(goalsStore.goals[0]));
});
</script>

<style scoped></style>
