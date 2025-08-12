<template>
  <AppHeader ref="appHeaderRef" />

  <main
    class="flex w-full flex-row flex-wrap items-center justify-start gap-2.5 xl:max-w-7xl"
    :style="{
      paddingTop: `${(appHeaderRef?.height ?? 0) + 10}px`,
    }"
  >
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "./components/app/Header/AppHeader.vue";

const appHeaderRef = useTemplateRef("appHeaderRef");
</script>

<style scoped></style>
