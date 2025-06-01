<template>
  <li
    class="rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="liClasses"
  >
    <h2 class="text-m">
      {{ props.step.name }}
    </h2>
    <ul v-for="sub in step.subSteps">
      <li class="text-xs">
        {{ sub.name }}
      </li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
import { COLOR_PALETTES } from "~/constants/colors";
import type { UserStep } from "~/stores/goals/types";

const props = defineProps<{
  /** Step of goal to complete */
  step: UserStep;

  /** Palette to use for colorful step */
  palette: keyof typeof COLOR_PALETTES;
}>();

const liClasses = [
  COLOR_PALETTES[props.palette].BORDER.DEFAULT,
  COLOR_PALETTES[props.palette].BORDER.HOVER,

  COLOR_PALETTES[props.palette].BG.DEFAULT,
  COLOR_PALETTES[props.palette].BG.HOVER,

  COLOR_PALETTES[props.palette].TEXT.DEFAULT,
  COLOR_PALETTES[props.palette].TEXT.HOVER,
];
</script>

<style scoped></style>
