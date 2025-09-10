<template>
  <div
    class="flex flex-col justify-center rounded-xl border-[1px] border-solid border-neutral-400 bg-neutral-50 p-3 dark:border-neutral-600 dark:bg-neutral-800"
    :class="[
      props.attachedTo
        ? {
            top: 'rounded-tl-none rounded-tr-none rounded-br-xl rounded-bl-xl border-t-0',
            left: 'rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none border-l-0',
            right:
              'rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl border-r-0',
            bottom:
              'rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-none border-b-0',
          }[props.attachedTo]
        : '',
      props.responsive ? 'xl:max-w-7xl' : '',
      props.fullHeight ? 'min-h-full' : 'min-h-fit',
      props.fullWidth
        ? 'w-full'
        : props.width !== undefined
          ? `w-[${props.width}rem]`
          : 'w-fit',
      props.grow ? 'grow' : '',
      props.noShrink ? 'shrink-0' : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { UiContainerProps } from "./types";

const props = defineProps<UiContainerProps>();
</script>

<style scoped></style>
