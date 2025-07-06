<template>
  <div
    class="flex h-fit w-fit [&>*]:fill-neutral-500"
    :class="classes"
  >
    <component :is="IconMap.get(props.icon)"></component>
  </div>
</template>

<script lang="ts" setup>
import IconMap from "./icon_map";
import type { Icons, IconState } from "./types";

const props = withDefaults(
  defineProps<{
    /**
     * What icon should be displayed
     */
    icon: Icons;
    /**
     * What state the icon should be in
     */
    state?: IconState;
  }>(),
  {
    state: "state__default",
  }
);

const classes = computed(() => [props.state]);
</script>

<style scoped></style>
