<template>
  <h1
    :id="goalIdInject.toString()"
    class="text-3xl font-bold"
  >
    Goal: {{ props.name }} ({{ props.completePercent.toFixed(2) }}%)
  </h1>

  <p
    v-if="props.description !== undefined"
    class="text-xl"
  >
    {{ props.description }}
  </p>
</template>

<script lang="ts" setup>
import { goalIdKey } from "~/components/user/goal/provide_inject";
import type { UserGoal } from "~/stores/goals/types";

const props = defineProps<{
  name: UserGoal["name"];
  description?: UserGoal["description"];
  completePercent: number;
}>();

const goalIdInject = inject(goalIdKey) as UserGoal["id"];
</script>

<style scoped></style>
