<template>
  <span
    class="text"
    :class="additionalClasses"
    :style="additionalStyles"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import type { CSSProperties } from "vue";

import type { TextUIProps } from "~/components/ui/Text/types";
import { computeUIPadding } from "~/components/ui/additional_styles";

const props = defineProps<{
  fontSize: TextUIProps["fontSize"];
  padding?: TextUIProps["padding"];
}>();

const additionalClasses = computed(() => [props.fontSize]);

const additionalStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};

  // add padding rules
  if (props.padding) computeUIPadding(styles, props.padding);

  return styles;
});
</script>

<style scoped>
@import url(./styles.css);
</style>
