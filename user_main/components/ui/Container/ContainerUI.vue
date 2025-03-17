<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
div {
  width: 100%;
  height: var(--header-height__desktop);
  padding: var(--padding__0);

  background-color: var(--background-color__1);

  border-radius: var(--border-radius__0);
  border: var(--border-width__0) solid var(--border-color__0);
}
</style>
