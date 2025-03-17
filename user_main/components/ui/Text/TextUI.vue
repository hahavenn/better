<template>
  <component
    :is="currentTextTypeComponent"
    :fontSize="props.fontSize"
    :padding="props.padding"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import type { Component } from "vue";

import type { TextUIProps } from "./types";

import textTypeComponents from "./components";

const props = withDefaults(defineProps<TextUIProps>(), {
  fontSize: "m",
});

const currentTextTypeComponent = textTypeComponents.get(
  props.type
) as Component;
</script>

<style scoped></style>
