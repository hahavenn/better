<template>
  <AppHeader />

  <main
    class="flex w-full flex-row flex-wrap items-center justify-start gap-2.5 xl:max-w-7xl"
  >
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "./components/app/Header/AppHeader.vue";
</script>

<style scoped></style>
