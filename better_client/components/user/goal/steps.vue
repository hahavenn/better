<template>
  <ul
    :aria-label="'Steps to complete your goal'"
    :aria-labelledby="props.goalId"
    class="flex flex-row justify-start gap-(--offset__3)"
  >
    <li
      v-for="s in props.steps"
      class="rounded-(--border-radius__0) border-(length:--border-width__0) border-solid border-(--color-purple__4) bg-(--color-purple__3) px-(--offset__0) py-(--offset__4) dark:border-(--color-purple__2) dark:bg-(--color-purple__0)"
    >
      <h2
        class="text-m text-(--color-purple__5)! dark:text-(--color-purple__1)!"
      >
        {{ s.name }}
      </h2>
      <ul v-for="sub in s.subSteps">
        <li class="text-(--color-purple__5)! dark:text-(--color-purple__1)!">
          {{ sub.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { UserGoal } from "~/stores/goals/types";

const props = defineProps<{
  /**
   * Id of head element with goal name (a11y)
   */
  goalId: string;
  /**
   * Steps of goal to complete
   */
  steps: UserGoal["steps"];
}>();
</script>

<style scoped></style>
