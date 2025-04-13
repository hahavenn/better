<template>
  <form
    role="search"
    aria-label="Site search"
  >
    <UiInput :preset="'search'" />
  </form>
</template>

<script lang="ts" setup></script>

<style scoped>
form {
  position: relative;

  width: 220px;
  height: 36px;
}
</style>
