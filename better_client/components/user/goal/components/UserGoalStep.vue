<template>
  <li
    class="flex flex-col gap-(--offset__6) rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="liClasses"
  >
    <header class="flex w-full items-center gap-(--offset__6)">
      <h2 class="text-2xl font-semibold">
        {{ props.step.name }}
      </h2>

      <UiCheckbox
        v-model="isDone"
        :ariaLabel="props.step.name"
        :palette="props.palette"
      />
    </header>

    <UiCustomScroll :palette="props.palette">
      <ul class="flex max-h-[200px] flex-col gap-(--offset__5) overflow-auto">
        <li v-for="sub in step.subSteps">
          <UserGoalSubStep
            :subStep="sub"
            :palette="props.palette"
            :stepId="props.step.id"
          />
        </li>
      </ul>
    </UiCustomScroll>
  </li>
</template>

<script lang="ts" setup>
import type { UserGoalStep } from "~/stores/goals/types";

import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";
import type { ColorPalettes } from "~/types/color_palettes";

import useGoalsStore from "~/stores/goals";

import { goalIdKey } from "~/components/user/goal/provide_inject";

import UiCustomScroll from "~/components/ui/CustomScroll/UiCustomScroll.vue";
import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";

const props = defineProps<{
  step: UserGoalStep;
  palette: ColorPalettes;
}>();
const goalIdInject = inject(goalIdKey);

const store = useGoalsStore();

const liClasses = [
  COLOR_PALETTES_STYLES[props.palette].BORDER.DEFAULT,

  COLOR_PALETTES_STYLES[props.palette].BG.DEFAULT,

  COLOR_PALETTES_STYLES[props.palette].TEXT.DEFAULT,
];

const isDone = ref(props.step.complete);
watch(isDone, (v, o) => {
  if (v !== o && goalIdInject !== undefined) {
    store.updateGoalCompleteness(
      {
        goalId: goalIdInject,
        stepId: props.step.id,
      },
      v
    );
  }
});
const { pause, resume } = watch(
  () => props.step.complete,
  (v, o) => {
    if (v !== o) syncDoneWithGoal();
  }
);
function syncDoneWithGoal() {
  pause();
  isDone.value = props.step.complete;
  resume;
}
</script>

<style scoped>
li:nth-child(odd) {
  grid-row: auto / span 3;
}
li:nth-child(even) {
  grid-row: auto / span 2;
}
</style>
