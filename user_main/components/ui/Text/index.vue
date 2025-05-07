<template>
  <span
    :class="classes"
    :style="styles"
    class="ui-text inline-block text-[var(--theme-font-color__0)] transition-[var(--transition__0)]"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import type { CSSProperties } from "vue";

import type { TextUIProps } from "./types";
import { computeUIPadding } from "~/components/ui/additional_styles";

const props = withDefaults(defineProps<TextUIProps>(), {
  fontSize: "size__xs",
  type: "plain",
  hoverStyles: false,
});

const classes = computed(() => [
  props.hoverStyles ? "hoverable" : "",
  props.fontSize,
]);

const styles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};

  if (props.padding) computeUIPadding(styles, props.padding);

  if (props.type === "link") styles.textDecoration = "underline";

  return styles;
});
</script>

<style scoped>
.ui-text {
  @media (hover: hover) {
    &.hoverable:hover {
      color: var(--theme-font-color__1);
    }
  }

  --font-weight__0: 400;
  --font-weight__1: 400;
  --font-weight__2: 400;
  --font-weight__3: 600;
  --font-weight__4: 600;
  --font-weight__5: 700;
  --font-weight__6: 800;

  --font-size__0: 12px;
  --font-size__1: 16px;
  --font-size__2: 20px;
  --font-size__3: 24px;
  --font-size__4: 32px;
  --font-size__5: 40px;
  --font-size__6: 48px;

  --line-height__0: calc(var(--font-size__0) * 1.2);
  --line-height__1: calc(var(--font-size__1) * 1.5);
  --line-height__2: calc(var(--font-size__2) * 1.4);
  --line-height__3: calc(var(--font-size__3) * 1.5);
  --line-height__4: calc(var(--font-size__4) * 1.5);
  --line-height__5: calc(var(--font-size__5) * 1.4);
  --line-height__6: calc(var(--font-size__6) * 1.5);

  &.size__xxs {
    font-size: var(--font-size__0);
    font-weight: var(--font-weight__0);
    line-height: var(--line-height__0);
  }
  &.size__xs {
    font-size: var(--font-size__1);
    font-weight: var(--font-weight__1);
    line-height: var(--line-height__1);
  }
  &.size__s {
    font-size: var(--font-size__2);
    font-weight: var(--font-weight__2);
    line-height: var(--line-height__2);
  }
  &.size__m {
    font-size: var(--font-size__3);
    font-weight: var(--font-weight__3);
    line-height: var(--line-height__3);
  }
  &.size__l {
    font-size: var(--font-size__4);
    font-weight: var(--font-weight__4);
    line-height: var(--line-height__4);
  }
  &.size__xl {
    font-size: var(--font-size__5);
    font-weight: var(--font-weight__5);
    line-height: var(--line-height__5);
  }
  &.size__xxl {
    font-size: var(--font-size__6);
    font-weight: var(--font-weight__6);
    line-height: var(--line-height__6);
  }
}
</style>
