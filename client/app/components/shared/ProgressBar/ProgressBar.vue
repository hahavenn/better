<template>
  <div
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="(progressValue * 100).toFixed(2)"
    :aria-labelledby="props.ariaLabelledBy"
    class="relative h-3 w-full overflow-hidden rounded-sm border-[1px] border-solid border-neutral-500"
  >
    <div
      aria-hidden="true"
      class="absolute h-full bg-green-500"
      :style="{
        width: `${progressValue * 100}%`,
      }"
    ></div>

    <template v-if="total !== 0">
      <div
        aria-hidden="true"
        v-for="i in total - 1"
        class="absolute flex h-full px-[3px]"
        :style="{
          left: `calc(${(i / total) * 100}% - 3px)`,
        }"
      >
        <div
          v-if="i !== total"
          class="h-full w-[1px] bg-neutral-500"
        ></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  total: number;
  completed: number;
  ariaLabelledBy?: string;
}>();

const progressValue = computed(() =>
  props.total !== 0 ? props.completed / props.total : 0
);
</script>

<style scoped></style>
