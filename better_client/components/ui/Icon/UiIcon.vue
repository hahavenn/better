<template>
  <div
    class="flex h-fit w-fit"
    :class="[...computedClasses, paletteClass]"
  >
    <component :is="IconMap.get(props.icon)"></component>
  </div>
</template>

<script lang="ts" setup>
import IconMap from "./icon_map";

import type { ColorPalettes } from "~/types/color_palettes";
import type { Icons, IconState } from "./types";

import COLOR_PALETTES_CLASSES from "~/constants/color/color_palettes_classes";

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

    palette?: ColorPalettes;
  }>(),
  {
    state: "state__default",
    palette: "NEUTRAL",
  }
);

const paletteClass = COLOR_PALETTES_CLASSES[props.palette].ICON.DEFAULT;
const computedClasses = computed(() => [props.state]);
</script>

<style scoped></style>
