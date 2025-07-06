<template>
  <UiCheckbox
    v-model="isDone"
    :ariaLabel="props.subStep.name"
    :label="props.subStep.name"
    :palette="props.palette"
  />
</template>

<script lang="ts" setup>
import type { UserGoalSubStep } from "~/stores/goals/types";
import type { ColorPalettes } from "~/types/color_palettes";

import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";

const props = defineProps<{
  subStep: UserGoalSubStep;
  palette: ColorPalettes;
}>();

const isDone = ref(props.subStep.complete);
watch(
  () => props.subStep.complete,
  (v) => (isDone.value = v)
);
</script>

<style scoped></style>
