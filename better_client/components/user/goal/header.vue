<template>
  <h1
    :id="props.goalId"
    class="text-3xl font-bold"
  >
    Goal: {{ props.name }} ({{ props.completePercent }}%)
  </h1>

  <p
    v-if="props.description !== undefined"
    class="text-xl"
  >
    {{ props.description }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * Id for head element (a11y)
   */
  goalId: string;
  /**
   * Name of user goal
   */
  name: string;
  /**
   * Description of user goal
   */
  description?: string;
  /**
   * Percent of goal completion
   */
  completePercent: number;
}>();
</script>

<style scoped></style>
