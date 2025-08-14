<template>
  <div
    class="flex h-fit w-fit"
    :class="[...computedClasses, paletteClass]"
  >
    <component :is="IconMap.get(props.icon)"></component>
  </div>
</template>

<script lang="ts" setup>
import IconMap from "./iconMap";

import type { ColorGeneratedPalettes } from "~/types/color/generatedPalettes";
import type { Icons, IconState } from "./types";

import COLOR_GENERATED_PALETTES_CLASSES from "~/constants/color/generatedPalettesClasses";

const props = withDefaults(
  defineProps<{
    /**
     * What icon should be displayed
     */
    icon: Icons;
    /**
     * What state the icon should be in
     */
    state?: IconState;

    palette?: ColorGeneratedPalettes;
  }>(),
  {
    state: "state__default",
    palette: "NEUTRAL",
  }
);

const paletteClass =
  COLOR_GENERATED_PALETTES_CLASSES[props.palette].FILL.DEFAULT;
const computedClasses = computed(() => [props.state]);
</script>

<style scoped></style>
