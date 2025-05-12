<template>
  <section class="flex flex-col gap-(--offset__2)">
    <h1 class="text-l">Goal: {{ goalsStore.goals[0].name }}</h1>

    <p class="text-s">
      {{ goalsStore.goals[0].description }}
    </p>

    <div
      class="relative h-[12px] w-full overflow-hidden rounded-(--border-radius__1) border-(length:--border-width__0) border-solid border-(--theme-border-color__1)"
    >
      <div
        class="absolute h-full bg-(--color-green__0)"
        :style="{
          width: `${(goalsStore.calcCompletedParts(goalsStore.goals[0]) / goalsStore.calcTotalParts(goalsStore.goals[0])) * 100}%`,
        }"
      ></div>

      <div
        v-for="i in goalsStore.calcTotalParts(goalsStore.goals[0])"
        class="absolute flex h-full px-[3px]"
        :style="{
          left: `calc(${((i + 1) / goalsStore.calcTotalParts(goalsStore.goals[0])) * 100}% - 3px)`,
        }"
      >
        <div
          v-if="i !== goalsStore.calcTotalParts(goalsStore.goals[0]) - 1"
          class="h-full w-(--border-width__0) bg-(--theme-border-color__1)"
        ></div>
      </div>
    </div>
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
