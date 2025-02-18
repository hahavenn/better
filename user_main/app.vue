<template>
  <HeaderApp />
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import HeaderApp from "@/components/app/Header/HeaderApp.vue";
</script>

<style scoped>
main {
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
}
</style>
