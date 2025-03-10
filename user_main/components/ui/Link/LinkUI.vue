<template>
  <a
    :target="linkTarget"
    :href="linkHref"
    :rel="linkRel"
    :title="linkTitle"
    :aria-label="linkAriaLabel"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import { LinkUIPresets } from "./presets";
import type { LinkUIProps } from "./types";

const props = withDefaults(defineProps<LinkUIProps>(), {
  target: "_self",
  href: "",
  rel: () => [""],
  ariaLabel: "",
  title: "",
});

const linkTarget = computed<LinkUIProps["target"]>(() =>
  props.type ? LinkUIPresets[props.type].target : props.target
);
const linkHref = computed<LinkUIProps["href"]>(() =>
  props.type ? LinkUIPresets[props.type].href : props.href
);
const linkRel = computed<string>(() =>
  (props.type ? LinkUIPresets[props.type].rel : props.rel).join(" ")
);
const linkTitle = computed<string>(() =>
  props.type ? LinkUIPresets[props.type].title : props.title
);
const linkAriaLabel = computed<string>(() =>
  props.type ? LinkUIPresets[props.type].ariaLabel : props.ariaLabel
);
</script>

<style scoped></style>
