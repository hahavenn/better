<template>
  <NuxtLink
    class="link"
    :target="linkTarget"
    :to="linkTo"
    :rel="linkRel"
    :title="linkTitle"
    :aria-label="linkAriaLabel"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { LinkUIPresets } from "./presets";
import type { LinkUIProps } from "./types";

const props = withDefaults(defineProps<LinkUIProps>(), {
  target: "_self",
  to: "",
  rel: () => [""],
  ariaLabel: "",
  title: "",
});

const linkTarget = computed<LinkUIProps["target"]>(() =>
  props.type ? LinkUIPresets[props.type].target : props.target
);
const linkTo = computed<LinkUIProps["to"]>(() =>
  props.type ? LinkUIPresets[props.type].to : props.to
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
