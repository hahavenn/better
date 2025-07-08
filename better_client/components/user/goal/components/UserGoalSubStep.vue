<template>
  <UiCheckbox
    v-model="isDone"
    :ariaLabel="props.subStep.name"
    :label="props.subStep.name"
    :palette="props.palette"
    :crossOut="true"
  />
</template>

<script lang="ts" setup>
import type { UserGoalStep, UserGoalSubStep } from "~/stores/goals/types";
import type { ColorPalettes } from "~/types/color_palettes";

import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";
import useGoalsStore from "~/stores/goals";
import { goalIdKey } from "~/components/user/goal/provide_inject";

const props = defineProps<{
  stepId: UserGoalStep["id"];
  subStep: UserGoalSubStep;
  palette: ColorPalettes;
}>();

const goalIdInject = inject(goalIdKey);

const store = useGoalsStore();

const isDone = ref(props.subStep.complete);
watch(isDone, (v, o) => {
  if (v !== o && goalIdInject !== undefined) {
    store.updateGoalCompleteness(
      {
        goalId: goalIdInject,
        stepId: props.stepId,
        subStepId: props.subStep.id,
      },
      v
    );
  }
});
const { pause, resume } = watch(
  () => props.subStep.complete,
  (v, o) => {
    if (v !== o) syncDoneWithGoal();
  }
);
function syncDoneWithGoal() {
  pause();
  isDone.value = props.subStep.complete;
  resume;
}
</script>

<style scoped></style>
