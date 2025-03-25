<template>
  <span
    class="text"
    :class="additionalClasses"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import type { TextUIProps } from "~/components/ui/Text/types";

const props = defineProps<{
  fontSize: TextUIProps["fontSize"];
}>();

const additionalClasses = computed(() => [props.fontSize]);
</script>

<style scoped>
@import url(./styles.css);
</style>
