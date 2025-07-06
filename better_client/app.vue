<template>
  <AppHeader />

  <main
    class="flex w-full flex-row flex-wrap items-center justify-start gap-(--offset__0) pt-[calc(61px_+_var(--offset__0))] xl:max-w-[1280px]"
  >
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "./components/app/Header/AppHeader.vue";
</script>

<style scoped></style>
