<template>
  <div
    class="relative h-[12px] w-full overflow-hidden rounded-(--border-radius__1) border-(length:--border-width__0) border-solid border-(--theme-border-color__1)"
  >
    <div
      class="absolute h-full bg-(--color-green__0)"
      :style="{
        width: `${(goalsStore.calcCompletedParts(props.goal) / goalsStore.calcTotalParts(props.goal)) * 100}%`,
      }"
    ></div>

    <div
      v-for="i in goalsStore.calcTotalParts(props.goal)"
      class="absolute flex h-full px-[3px]"
      :style="{
        left: `calc(${((i + 1) / goalsStore.calcTotalParts(props.goal)) * 100}% - 3px)`,
      }"
    >
      <div
        v-if="i !== goalsStore.calcTotalParts(props.goal) - 1"
        class="h-full w-(--border-width__0) bg-(--theme-border-color__1)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

import type { UserGoal } from "~/stores/goals/types";

const props = defineProps<{
  goal: UserGoal;
}>();

const goalsStore = useGoalsStore();
</script>

<style scoped></style>
