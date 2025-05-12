<template>
  <h1 class="text-l">Goal: {{ props.name }}</h1>

  <p
    v-if="props.description !== undefined"
    class="text-s"
  >
    {{ props.description }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * Name of user goal
   */
  name: string;
  /**
   * Description of user goal
   */
  description?: string;
}>();
</script>

<style scoped></style>
