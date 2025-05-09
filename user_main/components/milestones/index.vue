<template>
  <section class="flex flex-col gap-(--offset__2)">
    <h1 class="text-l">
      {{ goalsStore.selectedGoal.name }}
    </h1>

    <p class="text-s">
      {{ goalsStore.selectedGoal.description }}
    </p>

    <div
      class="relative h-[12px] w-full overflow-hidden rounded-(--border-radius__1) border-(length:--border-width__0) border-solid border-(--theme-border-color__1)"
    >
      <div
        class="absolute h-full bg-(--color-green__0)"
        :style="{
          width: `${goalsStore.completePercent * 100}%`,
        }"
      ></div>

      <div
        v-for="(s, i) in goalsStore.selectedGoal.steps"
        class="absolute flex h-full px-[3px]"
        :style="{
          left: `calc(${((i + 1) / goalsStore.steps.total) * 100}% - 3px)`,
        }"
      >
        <div
          v-if="i !== goalsStore.selectedGoal.steps.length - 1"
          class="h-full w-[1px] bg-(--theme-border-color__1)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

const goalsStore = useGoalsStore();

onMounted(() => {
  console.log("goalsStore.steps", goalsStore.steps);
});
</script>

<style scoped></style>
