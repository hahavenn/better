<template>
  <AppHeader />
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
main {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--offset__0);
}
</style>
