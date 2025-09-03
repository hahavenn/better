<template>
  <form
    role="search"
    aria-label="Site search"
    class="relative h-[36px] w-[220px]"
  >
    <UiInput
      v-model="searchValue"
      :preset="'search'"
    />
  </form>
</template>

<script lang="ts" setup>
const searchValue = shallowRef("");
</script>

<style scoped></style>
