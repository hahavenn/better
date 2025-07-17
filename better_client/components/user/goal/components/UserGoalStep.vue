<template>
  <li
    class="flex flex-col gap-(--offset__6) rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="liClasses"
  >
    <header class="flex w-full items-center gap-(--offset__6)">
      <h2 class="line-clamp-1 text-2xl font-semibold">
        {{ props.step.name }}
      </h2>

      <UiCheckbox
        v-model="completeState"
        @toggle="toggleHandler"
        :ariaLabel="props.step.name"
        :palette="palette"
      />
    </header>

    <UiCustomScroll :palette="palette">
      <ul class="flex max-h-[200px] flex-col gap-(--offset__5) overflow-auto">
        <li
          v-for="sub in step.subSteps"
          :key="sub.id"
        >
          <UserGoalSubStep
            :subStep="sub"
            :palette="palette"
            :stepId="props.step.id"
          />
        </li>
      </ul>
    </UiCustomScroll>
  </li>
</template>

<script lang="ts" setup>
import type { UserGoalStep } from "~/stores/goals/types";

import COLOR_PALETTES_STYLES from "~/constants/color_palettes";

import useGoalsStore from "~/stores/goals";

import { goalIdKey } from "~/components/user/goal/provide_inject";

import UiCustomScroll from "~/components/ui/CustomScroll/UiCustomScroll.vue";
import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";
import UserGoalSubStep from "./UserGoalSubStep.vue";

const props = defineProps<{
  step: UserGoalStep;
}>();
const goalIdInject = inject(goalIdKey);
const store = useGoalsStore();
const palette = pickPalette({
  exclude: ["SLATE", "GRAY", "ZINC", "NEUTRAL", "STONE"],
});
const liClasses = [
  COLOR_PALETTES_STYLES[palette].BORDER.DEFAULT,
  COLOR_PALETTES_STYLES[palette].BG.DEFAULT,
  COLOR_PALETTES_STYLES[palette].TEXT.DEFAULT,
];

const completeState = ref(props.step.complete);
function toggleHandler(state: boolean) {
  if (goalIdInject === undefined) return;

  store.updateGoalCompleteness(
    {
      goalId: goalIdInject,
      stepId: props.step.id,
    },
    state
  );
}
watch(
  () => props.step.complete,
  (v, o) => {
    if (v !== o) {
      completeState.value = v;
    }
  }
);
</script>

<style scoped>
li:nth-child(odd) {
  grid-row: auto / span 3;
}
li:nth-child(even) {
  grid-row: auto / span 2;
}
</style>
