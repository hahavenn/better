<template>
  <h1
    :id="goalIdInject.toString()"
    class="text-3xl font-bold"
  >
    Goal: {{ currGoal.name }} ({{ completePercent }}%)
  </h1>

  <p
    v-if="currGoal.description !== undefined"
    class="text-xl"
  >
    {{ currGoal.description }}
  </p>
</template>

<script lang="ts" setup>
import { goalIdKey } from "~/components/user/goal/provide_inject";

import useGoalsStore from "~/stores/goals";

import type { UserGoal } from "~/stores/goals/types";

const goalsStore = useGoalsStore();

const goalIdInject = inject(goalIdKey) as UserGoal["id"];

const currGoal = computed(
  () => goalsStore.goals.find((g) => g.id === goalIdInject)!
);

const completePercent = computed(() =>
  (
    (goalsStore.calcCompletedParts(currGoal.value) /
      goalsStore.calcTotalParts(currGoal.value)) *
    100
  ).toFixed(2)
);
</script>

<style scoped></style>
