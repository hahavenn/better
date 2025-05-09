<template>
  <div
    class="ui-container flex flex-col justify-center rounded-(--border-radius__0) border-(length:--border-width__0) border-solid border-(--theme-border-color__0) bg-(--theme-bg-color__1) p-(--offset__1)"
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
     * `height` CSS-property
     * @description If `true` -> `height: 100%`
     * @default `fit-content`
     */
    fullHeight?: boolean;

    /**
     * `width: 100%`
     * @default false
     *
     * @description
     * Should not be set with `width`
     */
    fullWidth?: boolean;
    /**
     * Width of container in `px`
     *
     * @description
     * Should not be set with `fullWidth`
     */
    width?: number;

    /**
     * `flex-grow: 1`
     * @default false
     */
    grow?: boolean;
    /**
     * `flex-shrink: 0`
     * @default false
     */
    noShrink?: boolean;

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

  styles.minHeight = props.fullHeight ? "100%" : "fit-content";
  styles.width = props.fullWidth
    ? "100%"
    : props.width !== undefined
      ? `${props.width}px`
      : "fit-content";

  if (props.grow) styles.flexGrow = 1;
  if (props.noShrink) styles.flexShrink = 0;

  return styles;
});
const classes = computed(() => [
  props.responsive && "responsive",
  props.attachedTo ?? "",
]);
</script>

<style scoped>
.ui-container {
  @media screen and (min-width: 1280px) {
    &.responsive {
      max-width: 1280px;
    }
  }

  --br: var(--border-radius__0);

  &.attachment__top {
    border-radius: 0 0 var(--br) var(--br);
    border-top-width: 0;
  }
  &.attachment__bottom {
    border-radius: var(--br) var(--br) 0 0;
    border-bottom-width: 0;
  }
  &.attachment__left {
    border-radius: var(--br) 0 0 var(--br);
    border-left-width: 0;
  }
  &.attachment__right {
    border-radius: 0 var(--br) var(--br) 0;
    border-right-width: 0;
  }
}
</style>
