<template>
  <div
    class="flex h-fit w-fit"
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

import {
  COLOR_GENERATED_FILL_ACTIVE,
  COLOR_GENERATED_FILL_DEFAULT,
  COLOR_GENERATED_FILL_HOVER,
} from "~/constants/color/generatedFill";

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
    state: "default",
    palette: "NEUTRAL",
  }
);

const isDark = useDark();

const fill = computed(() => {
  switch (props.state) {
    case "active": {
      return isDark.value
        ? COLOR_GENERATED_FILL_ACTIVE[props.palette].DARK
        : COLOR_GENERATED_FILL_ACTIVE[props.palette].LIGHT;
    }
    case "hover": {
      return isDark.value
        ? COLOR_GENERATED_FILL_HOVER[props.palette].DARK
        : COLOR_GENERATED_FILL_HOVER[props.palette].LIGHT;
    }
    case "disabled": {
      return "";
    }
    default: {
      return isDark.value
        ? COLOR_GENERATED_FILL_DEFAULT[props.palette].DARK
        : COLOR_GENERATED_FILL_DEFAULT[props.palette].LIGHT;
    }
  }
});

const styles = computed<CSSProperties>(() => {
  let s: CSSProperties = {};

  if (props.rotateDeg !== undefined) {
    s.transform = `rotate(${props.rotateDeg ?? 0}deg)`;
  }

  s.fill = `var(${fill.value})`;

  return s;
});
</script>

<style scoped></style>
