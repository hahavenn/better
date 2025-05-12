<template>
  <div
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="(props.progress.completed / props.progress.total) * 100"
    :aria-labelledby="props.goalId"
    class="relative h-[12px] w-full overflow-hidden rounded-(--border-radius__1) border-(length:--border-width__0) border-solid border-(--theme-border-color__1)"
  >
    <div
      aria-hidden="true"
      class="absolute h-full bg-(--color-green__0)"
      :style="{
        width: `${(props.progress.completed / props.progress.total) * 100}%`,
      }"
    ></div>

    <div
      aria-hidden="true"
      v-for="i in props.progress.total"
      class="absolute flex h-full px-[3px]"
      :style="{
        left: `calc(${((i + 1) / props.progress.total) * 100}% - 3px)`,
      }"
    >
      <div
        v-if="i !== props.progress.total - 1"
        class="h-full w-(--border-width__0) bg-(--theme-border-color__1)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UserGoal } from "~/stores/goals/types";

const props = defineProps<{
  /**
   * Id of head element with goal name (a11y)
   */
  goalId: string;
  /**
   * User goal to display progress for
   */
  goal: UserGoal;
  /**
   * Info about progress of goal
   */
  progress: {
    completed: number;
    total: number;
  };
}>();
</script>

<style scoped></style>
