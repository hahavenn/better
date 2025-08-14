<template>
  <UiCheckbox
    v-model="completeState"
    @toggle="toggleHandler"
    :ariaLabel="props.subStep.name"
    :label="props.subStep.name"
    :palette="props.palette"
    :crossOut="true"
  />
</template>

<script lang="ts" setup>
import type { UserGoalStep, UserGoalSubStep } from "~/stores/goals/types";
import type { ColorGeneratedPalettes } from "~/types/color/palettes_generated";

import useGoalsStore from "~/stores/goals";

import { goalIdKey } from "~/components/user/goal/provide_inject";

import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";

const props = defineProps<{
  stepId: UserGoalStep["id"];
  subStep: UserGoalSubStep;
  palette: ColorGeneratedPalettes;
}>();
const goalIdInject = inject(goalIdKey);
const store = useGoalsStore();

const completeState = ref(props.subStep.complete);
function toggleHandler(state: boolean) {
  if (goalIdInject === undefined) return;

  store.updateGoalCompleteness(
    {
      goalId: goalIdInject,
      stepId: props.stepId,
      subStepId: props.subStep.id,
    },
    state
  );
}
watch(
  () => props.subStep.complete,
  (v, o) => {
    if (v !== o) {
      completeState.value = v;
    }
  }
);
</script>

<style scoped></style>
