<template>
  <span
    class="text"
    :class="classes"
    :style="styles"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import type { CSSProperties } from "vue";

import type { TextUIProps } from "./types";
import { computeUIPadding } from "~/components/ui/additional_styles";

const props = withDefaults(defineProps<TextUIProps>(), {
  fontSize: "xs",
  type: "plain",
  hoverStyles: false,
});

const classes = computed(() => [
  props.hoverStyles ? "hover_enable" : "",
  props.fontSize,
]);

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};

  // add padding rules
  if (props.padding) computeUIPadding(styles, props.padding);

  if (props.type === "link") styles.textDecoration = "underline";

  return styles;
});
</script>

<style scoped>
.text {
  display: inline-block;

  color: var(--theme-font-color__0);
  transition: var(--transition__0);
}

/* Hover */
.text {
  @media (hover: hover) {
    &.hover_enable:hover {
      color: var(--theme-font-color__1);
    }
  }
}

/* Sizes */
.text {
  &.xxs {
    font-size: var(--font-size__0);
    font-weight: var(--font-weight__0);
    line-height: var(--line-height__0);
  }
  &.xs {
    font-size: var(--font-size__1);
    font-weight: var(--font-weight__1);
    line-height: var(--line-height__1);
  }
  &.s {
    font-size: var(--font-size__2);
    font-weight: var(--font-weight__2);
    line-height: var(--line-height__2);
  }
  &.m {
    font-size: var(--font-size__3);
    font-weight: var(--font-weight__3);
    line-height: var(--line-height__3);
  }
  &.l {
    font-size: var(--font-size__4);
    font-weight: var(--font-weight__4);
    line-height: var(--line-height__4);
  }
  &.xl {
    font-size: var(--font-size__5);
    font-weight: var(--font-weight__5);
    line-height: var(--line-height__5);
  }
  &.xxl {
    font-size: var(--font-size__6);
    font-weight: var(--font-weight__6);
    line-height: var(--line-height__6);
  }
}
</style>
