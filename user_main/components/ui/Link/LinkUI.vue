<template>
  <a
    :target="props.type ? LinkUIPresets[props.type].target : props.target"
    :href="props.type ? LinkUIPresets[props.type].href : props.href"
    :rel="
      (props.type ? LinkUIPresets[props.type].rel : props.rel)?.join(' ') ?? ''
    "
    :title="props.type ? LinkUIPresets[props.type].title : props.title"
    :aria-label="
      props.type ? LinkUIPresets[props.type].ariaLabel : props.ariaLabel
    "
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import { LinkUIPresets } from "./presets";
import type { LinkUIProps } from "./types";

const props = withDefaults(defineProps<LinkUIProps>(), {
  target: "_self",
});
</script>

<style scoped></style>
