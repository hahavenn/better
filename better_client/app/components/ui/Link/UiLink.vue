<template>
  <NuxtLink
    :target
    :to
    :rel
    :title
    :aria-label="ariaLabel"
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

const target = computed<LinkUIProps["target"]>(() =>
  props.preset ? LinkUIPresets[props.preset].target : props.target
);
const to = computed<LinkUIProps["to"]>(() =>
  props.preset ? LinkUIPresets[props.preset].to : props.to
);
const rel = computed<string>(() =>
  (props.preset ? LinkUIPresets[props.preset].rel : props.rel)!.join(" ")
);
const title = computed<string>(() =>
  props.preset ? LinkUIPresets[props.preset].title : props.title
);
const ariaLabel = computed<string>(() =>
  props.preset ? LinkUIPresets[props.preset].ariaLabel : (props.ariaLabel ?? "")
);
</script>
