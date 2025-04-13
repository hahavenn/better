<template>
  <div
    class="icon"
    :class="iconClasses"
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
    state: "default",
  }
);

const iconClasses = [props.state];
</script>

<style scoped>
.icon {
  display: flex;

  width: fit-content;
  height: fit-content;
}

.icon * {
  fill: var(--theme-icon__default);
}
</style>
