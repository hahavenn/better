<template>
  <li
    class="flex h-fit flex-col gap-(--offset__6) rounded-(--border-radius__0) border-(length:--border-width__0) border-solid px-(--offset__0) py-(--offset__4)"
    :class="liClasses"
  >
    <header class="flex w-full items-center justify-between gap-(--offset__6)">
      <h2 class="flex items-center gap-(--offset__5) text-2xl font-semibold">
        <span
          class="line-clamp-1"
          :style="{
            textDecoration: props.step.complete ? 'line-through' : '',
          }"
        >
          {{ props.step.name }}
        </span>
        <span>({{ props.step.subSteps.length }})</span>
      </h2>

      <UiCheckbox
        v-model="completeState"
        @toggle="toggleHandler"
        :ariaLabel="props.step.name"
        :palette="palette"
      />
    </header>

    <UiAccordion
      v-show="isExpandable && accordionExpanded"
      v-model="accordionExpanded"
      ref="accordionRef"
      :label="'step'"
      :accordionId="`step_${props.step.id}`"
    >
      <ul
        v-show="accordionExpanded"
        class="flex max-h-full flex-col gap-(--offset__5) overflow-auto"
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
    </UiAccordion>

    <div class="flex h-9 w-full items-center gap-1">
      <button
        v-if="isExpandable"
        @click="accordionExpanded = !accordionExpanded"
        ref="stepExpandBtnRef"
        class="flex h-full shrink-0 grow cursor-pointer items-center justify-center rounded-tl-lg rounded-bl-lg border-(length:--border-width__0) border-solid"
        :class="stepBtnClasses"
        type="button"
      >
        <UiIcon
          :icon="'expand'"
          :palette="palette"
        />
      </button>
      <button
        class="flex h-full shrink-0 grow cursor-pointer items-center justify-center border-(length:--border-width__0) border-solid"
        :class="[...stepBtnClasses, ...stepAddBtnClasses]"
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

import COLOR_PALETTES_STYLES from "~/constants/color_palettes";

import useGoalsStore from "~/stores/goals";

import type { UiAccordionType } from "~/components/ui/Accordion/types";
import useAccordion from "~/components/ui/Accordion/useAccordion";

import { goalIdKey } from "~/components/user/goal/provide_inject";

import UiCheckbox from "~/components/ui/Checkbox/UiCheckbox.vue";
import UiIcon from "~/components/ui/Icon/UiIcon.vue";

const UiAccordion = defineAsyncComponent(
  () => import("~/components/ui/Accordion/UiAccordion.vue")
);
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

const isExpandable = computed(() => props.step.subSteps.length > 0);
const accordionRef = useTemplateRef<UiAccordionType>("accordion");
const stepExpandBtnRef = useTemplateRef<HTMLButtonElement>("stepExpandBtnRef");
const { expanded: accordionExpanded } = useAccordion(
  accordionRef,
  stepExpandBtnRef
);

const stepBtnClasses = [
  COLOR_PALETTES_STYLES[palette].BORDER.DEFAULT,
  COLOR_PALETTES_STYLES[palette].BG.DEFAULT,

  COLOR_PALETTES_STYLES[palette].BORDER.HOVER,
  COLOR_PALETTES_STYLES[palette].BG.HOVER,
];
const stepAddBtnClasses = computed(() => [
  isExpandable.value
    ? "rounded-tr-lg rounded-br-lg"
    : "rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg",
]);
</script>

<style scoped></style>
