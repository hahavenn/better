<template>
  <section class="gap-(--offset__2) flex flex-col">
    <h1 class="text-l">
      {{ goalsStore.selectedGoal.name }}
    </h1>

    <p class="text-s">
      {{ goalsStore.selectedGoal.description }}
    </p>

    <span class="text-xxs">hello</span>

    <div
      class="rounded-(--border-radius__1) border-(length:--border-width__0) border-(--theme-border-color__1) relative h-[12px] w-full overflow-hidden border-solid"
    >
      <div
        class="bg-(--color-green__0) absolute h-full"
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
          class="bg-(--theme-border-color__1) h-full w-[1px]"
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
