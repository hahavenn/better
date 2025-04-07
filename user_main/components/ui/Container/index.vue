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
    /**
     * Does container should be full height of parent component
     */
    fullHeight?: boolean;
    /**
     * Does container should be responsive to media-query
     */
    responsive?: boolean;
    /**
     * Which side of parent component container is attached to
     */
    attachedTo?: "left" | "top" | "right" | "bottom";
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
  props.attachedTo ?? "",
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
  .responsive {
    max-width: calc(1280px - 2 * var(--offset__0));
  }
}

.top {
  border-radius: 0 0 var(--border-radius__0) var(--border-radius__0);
  border-top-width: 0;
}
.bottom {
  border-radius: var(--border-radius__0) var(--border-radius__0) 0 0;
  border-bottom-width: 0;
}
.left {
  border-radius: var(--border-radius__0) 0 0 var(--border-radius__0);
  border-left-width: 0;
}
.right {
  border-radius: 0 var(--border-radius__0) var(--border-radius__0) 0;
  border-right-width: 0;
}
</style>
