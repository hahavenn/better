<template>
  <div
    :style="styles"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

const props = withDefaults(
  defineProps<{
    fullHeight?: boolean;
    responsive?: boolean;
    header?: boolean;
  }>(),
  {}
);

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};

  styles.height = props.fullHeight ? "100%" : "fit-content";

  return styles;
});
const classes = computed(() => [
  props.responsive ? "responsive" : "",
  props.header ? "header" : "",
]);
</script>

<style scoped>
div {
  width: 100%;
  padding: var(--offset__1);

  background-color: var(--background-color__1);

  border-radius: var(--border-radius__0);
  border: var(--border-width__0) solid var(--border-color__0);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (min-width: 1280px) {
  div.responsive {
    max-width: calc(1280px - 2 * var(--offset__0));
  }
}

div.header {
  border-radius: 0 0 var(--border-radius__0) var(--border-radius__0);
  border-top-color: var(--background-color__1);
}
</style>
