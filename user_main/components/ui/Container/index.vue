<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

const props = defineProps<{
  flexGrow?: number;
}>();

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (props.flexGrow) {
    styles.flexGrow = props.flexGrow;
  }
  return styles;
});
</script>

<style scoped>
div {
  padding: var(--offset__0);

  background-color: var(--background-color__1);

  border-radius: var(--border-radius__0);
  border: var(--border-width__0) solid var(--border-color__0);
}
</style>
