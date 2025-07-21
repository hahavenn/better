<template>
  <div class="custom_scroll">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { COLOR_GENERATED_BORDER_ACTIVE } from "~/constants/color/generated_border";
import type { ColorGeneratedPalettes } from "~/types/color/palettes_generated";

const props = defineProps<{
  palette: ColorGeneratedPalettes;
}>();

const isDark = useDark();

const scrollbarColor = computed(
  () =>
    `var(${COLOR_GENERATED_BORDER_ACTIVE[props.palette][isDark ? "DARK" : "LIGHT"]})`
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
