<template>
  <li
    class="rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="[props.colors.bg, props.colors.border]"
  >
    <h2
      class="text-m"
      :class="[props.colors.text]"
    >
      {{ props.step.name }}
    </h2>
    <ul v-for="sub in step.subSteps">
      <li
        class="text-xs"
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
