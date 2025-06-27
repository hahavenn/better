<template>
  <li
    class="rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="liClasses"
  >
    <h2 class="text-2xl font-semibold">
      {{ props.step.name }}
    </h2>
    <ul v-for="sub in step.subSteps">
      <li class="text-base">
        {{ sub.name }}
      </li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
import type { UserStep } from "~/stores/goals/types";

import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";

const props = defineProps<{
  /** Step of goal to complete */
  step: UserStep;

  /** Palette to use for colorful step */
  palette: keyof typeof COLOR_PALETTES_STYLES;
}>();

const liClasses = [
  COLOR_PALETTES_STYLES[props.palette].BORDER.DEFAULT,
  COLOR_PALETTES_STYLES[props.palette].BORDER.HOVER,

  COLOR_PALETTES_STYLES[props.palette].BG.DEFAULT,
  COLOR_PALETTES_STYLES[props.palette].BG.HOVER,

  COLOR_PALETTES_STYLES[props.palette].TEXT.DEFAULT,
  COLOR_PALETTES_STYLES[props.palette].TEXT.HOVER,
];
</script>

<style scoped>
li:nth-child(odd) {
  grid-row: auto / span 3;
}
li:nth-child(even) {
  grid-row: auto / span 2;
}
</style>
