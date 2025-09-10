<template>
  <h1
    :id="props.headerId"
    class="text-3xl font-bold"
  >
    {{ props.header }}
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
  header: string;
  description?: string;
  /** common use for aria performance */
  headerId?: string;
}>();
</script>

<style scoped></style>
