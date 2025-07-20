<template>
  <div class="custom_scroll">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { COLOR_BORDER_ACTIVE } from "~/constants/color/color_border";
import type { ColorPalettes } from "~/types/color_palettes";

const props = defineProps<{
  palette: ColorPalettes;
}>();

const isDark = useDark();

const scrollbarColor = computed(
  () => `var(${COLOR_BORDER_ACTIVE[props.palette][isDark ? "DARK" : "LIGHT"]})`
);
</script>

<style scoped>
.custom_scroll {
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: v-bind("scrollbarColor") transparent; /* scrollbar + bg */

  /* Webkit */
  &::-webkit-scrollbar {
    width: var(--border-radius__1);
    height: var(--border-radius__1);
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: v-bind("scrollbarColor"); /* scrollbar */
    border-radius: var(--border-radius__1);
  }
}
</style>
