<template>
  <li
    class="flex h-fit flex-col gap-2 rounded-xl border-[1px] border-solid px-2.5 py-1.5"
    :class="liClasses"
  >
    <header class="flex w-full items-center justify-between gap-2">
      <h2 class="flex items-center gap-1 text-2xl font-semibold">
        <span
          class="line-clamp-1"
          :class="[props.step.complete ? 'line-through' : '']"
        >
          {{ props.step.name }}
        </span>
      </h2>

      <div class="flex items-center gap-1">
        <span
          v-if="props.step.subSteps.length > 0"
          class="text-sm font-bold"
          :aria-label="`Progress: ${completedSubSteps} out of ${props.step.subSteps.length}`"
        >
          {{ `(${completedSubSteps}/${props.step.subSteps.length})` }}
        </span>
        <UiCheckbox
          v-model="completeState"
          @toggle="toggleHandler"
          :ariaLabel="props.step.name"
          :palette="palette"
        />
      </div>
    </header>

    <UiCustomScroll :palette>
      <ul
        ref="accordionElRef"
        class="flex flex-col gap-1 overflow-auto"
      >
        <li
          v-for="sub in props.step.subSteps"
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

    <div class="flex h-9 w-full items-center gap-1">
      <button
        v-if="isExpandable"
        @click="subStepsExpanded = !subStepsExpanded"
        ref="stepExpandBtnRef"
        class="flex h-full shrink-0 grow cursor-pointer items-center justify-center rounded-tl-lg rounded-bl-lg border-[1px] border-solid"
        :class="stepBtnClasses"
        type="button"
      >
        <UiIcon
          :icon="'expand'"
          :palette="palette"
        />
      </button>
      <button
        class="flex h-full shrink-0 grow cursor-pointer items-center justify-center border-[1px] border-solid"
        :class="[
          ...stepBtnClasses,
          isExpandable
            ? 'rounded-tr-lg rounded-br-lg'
            : 'rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg',
        ]"
        type="button"
      >
        <UiIcon
          :icon="'add'"
          :palette="palette"
        />
      </button>
    </div>
  </li>
</template>

<script lang="ts" setup>
import type { UserGoalStep } from "~/stores/goals/types";

import COLOR_GENERATED_PALETTES_CLASSES from "~/constants/color/generatedPalettesClasses";

import useGoalsStore from "~/stores/goals";

import { goalIdKey } from "~/components/user/goal/provideInject";

import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";
import UiIcon from "~/components/ui/Icon/UiIcon.vue";
import UiCustomScroll from "~/components/ui/CustomScroll/UiCustomScroll.vue";

const UserGoalSubStep = defineAsyncComponent(
  () => import("./UserGoalSubStep.vue")
);

const props = defineProps<{
  step: UserGoalStep;
}>();
const goalIdInject = inject(goalIdKey);
const store = useGoalsStore();

const palette = pickPalette({
  exclude: ["SLATE", "GRAY", "ZINC", "NEUTRAL", "STONE"],
});
const liClasses = [
  COLOR_GENERATED_PALETTES_CLASSES[palette].BORDER.DEFAULT,
  COLOR_GENERATED_PALETTES_CLASSES[palette].BG.DEFAULT,
  COLOR_GENERATED_PALETTES_CLASSES[palette].TEXT.DEFAULT,
];

const completedSubSteps = computed(() =>
  props.step.subSteps.reduce((c, sub) => c + (sub.complete ? 1 : 0), 0)
);

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

const stepExpandBtnRef = useTemplateRef<HTMLButtonElement>("stepExpandBtnRef");
const stepBtnClasses = [
  COLOR_GENERATED_PALETTES_CLASSES[palette].BORDER.DEFAULT,
  COLOR_GENERATED_PALETTES_CLASSES[palette].BG.DEFAULT,

  COLOR_GENERATED_PALETTES_CLASSES[palette].BORDER.HOVER,
  COLOR_GENERATED_PALETTES_CLASSES[palette].BG.HOVER,
];

const isExpandable = computed(() => props.step.subSteps.length > 0);
const accordionElRef = useTemplateRef("accordionElRef");
const { expanded: subStepsExpanded } = useAccordionElement({
  accordionEl: accordionElRef,
  accordionId: `subSteps_${props.step.id}`,
  ariaLabel: "sub steps",
  maxHeight: 400,
  expandToggleEl: stepExpandBtnRef,
  expanded: false,
});
</script>

<style scoped></style>
