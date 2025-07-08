<template>
  <li
    class="flex flex-col gap-(--offset__6) rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="liClasses"
  >
    <h2 class="text-2xl font-semibold">
      {{ props.step.name }}
    </h2>

    <UiCustomScroll :palette="props.palette">
      <ul class="flex max-h-[200px] flex-col gap-(--offset__5) overflow-auto">
        <li v-for="sub in step.subSteps">
          <UserGoalSubStep
            :subStep="sub"
            :palette="props.palette"
            :stepId="props.step.id"
          />
        </li>
      </ul>
    </UiCustomScroll>
  </li>
</template>

<script lang="ts" setup>
import type { UserGoalStep } from "~/stores/goals/types";

import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";
import type { ColorPalettes } from "~/types/color_palettes";

import UiCustomScroll from "~/components/ui/CustomScroll/UiCustomScroll.vue";

const props = defineProps<{
  step: UserGoalStep;
  palette: ColorPalettes;
}>();

const liClasses = [
  COLOR_PALETTES_STYLES[props.palette].BORDER.DEFAULT,

  COLOR_PALETTES_STYLES[props.palette].BG.DEFAULT,

  COLOR_PALETTES_STYLES[props.palette].TEXT.DEFAULT,
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
