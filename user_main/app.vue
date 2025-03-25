<template>
  <AppHeader ref="headerRef" />

  <main :style="mainStyles">
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

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
}
</style>
