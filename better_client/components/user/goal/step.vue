<template>
  <li
    class="rounded-(--border-radius__0) border-(length:--border-width__0) border-solid border-(--color-purple__4) bg-(--color-purple__3) px-(--offset__0) py-(--offset__4) dark:border-(--color-purple__2) dark:bg-(--color-purple__0)"
    :class="[props.colors.bg, props.colors.border]"
  >
    <h2
      class="text-m text-(--color-purple__5)! dark:text-(--color-purple__1)!"
      :class="[props.colors.text]"
    >
      {{ props.step.name }}
    </h2>
    <ul v-for="sub in step.subSteps">
      <li
        class="text-(--color-purple__5)! dark:text-(--color-purple__1)!"
        :class="[props.colors.text]"
      >
        {{ sub.name }}
      </li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
import type { UserStep } from "~/stores/goals/types";
import type { StepColors } from "./types";

const props = defineProps<{
  /**
   * Step of goal to complete
   */
  step: UserStep;
  colors: StepColors;
}>();
</script>

<style scoped></style>
