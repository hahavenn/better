<template>
  <div
    class="flex h-fit w-fit"
    :class="classes"
    :style="styles"
  >
    <component :is="IconMap.get(props.icon)"></component>
  </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from "vue";

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

    /** Rotate degree for icon */
    rotateDeg?: number;
  }>(),
  {
    state: "state__default",
    palette: "NEUTRAL",
  }
);

const classes = computed(() => [
  props.state,
  COLOR_GENERATED_PALETTES_CLASSES[props.palette].FILL.DEFAULT,
]);

const styles = computed<CSSProperties>(() => {
  let s: CSSProperties = {};

  if (props.rotateDeg !== undefined) {
    s.transform = `rotate(${props.rotateDeg ?? 0}deg)`;
  }

  return s;
});
</script>

<style scoped></style>
