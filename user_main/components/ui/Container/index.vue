<template>
  <div
    class="ui-container flex w-full flex-col justify-center rounded-[var(--border-radius__0)] border-[length:var(--border-width__0)] border-solid border-[color:var(--theme-border-color__0)] bg-[var(--theme-bg-color__1)] p-[var(--offset__1)]"
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
    attachedTo?:
      | "attachment__left"
      | "attachment__top"
      | "attachment__right"
      | "attachment__bottom";
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
.ui-container {
  @media screen and (min-width: 1280px) {
    &.responsive {
      max-width: calc(1280px - 2 * var(--offset__0));
    }
  }

  &.attachment__top {
    border-radius: 0 0 var(--border-radius__0) var(--border-radius__0);
    border-top-width: 0;
  }
  &.attachment__bottom {
    border-radius: var(--border-radius__0) var(--border-radius__0) 0 0;
    border-bottom-width: 0;
  }
  &.attachment__left {
    border-radius: var(--border-radius__0) 0 0 var(--border-radius__0);
    border-left-width: 0;
  }
  &.attachment__right {
    border-radius: 0 var(--border-radius__0) var(--border-radius__0) 0;
    border-right-width: 0;
  }
}
</style>
