<template>
  <div
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="progressValue * 100"
    :aria-labelledby="goalIdInject.toString()"
    class="relative h-[12px] w-full overflow-hidden rounded-(--border-radius__1) border-(length:--border-width__0) border-solid border-neutral-500"
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
          class="h-full w-(--border-width__0) bg-neutral-500"
        ></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { UserGoal } from "~/stores/goals/types";

import { goalIdKey } from "~/components/user/goal/provide_inject";

import useGoalsStore from "~/stores/goals";

const goalIdInject = inject(goalIdKey) as UserGoal["id"];

const progressValue = computed(() =>
  total.value !== 0 ? completed.value / total.value : 0
);

const goalsStore = useGoalsStore();

const currGoal = computed(
  () => goalsStore.goals.find((g) => g.id === goalIdInject)!
);
const completed = computed(() => goalsStore.calcCompletedParts(currGoal.value));
const total = computed(() => goalsStore.calcTotalParts(currGoal.value));
</script>

<style scoped></style>
