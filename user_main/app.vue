<template>
  <AppHeader ref="headerRef" />

  <main
    class="flex w-full flex-col items-center justify-start"
    :style="mainStyles"
  >
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

const headerRef = useTemplateRef("headerRef");
const { height } = useElementSize(headerRef);

const mainStyles = computed<CSSProperties>(() => ({
  paddingTop: `calc(${height.value}px + var(--offset__0))`,
}));
</script>

<style scoped></style>
