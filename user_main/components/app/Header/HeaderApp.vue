<template>
  <header>
    <a
      class="logo"
      href="/"
    >
      ha_edu
    </a>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  width: 100%;

  background-color: var(--background-color__1);

  border-color: var(--border-color__0);
  border-radius: var(--border-radius__0);
  border-width: var(--border-width__0);
  border-style: solid;

  height: var(--header-height__desktop);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--padding__0);
}

.logo {
  text-decoration: none;
  font-size: var(--font-size__6);

  display: inline-block;
  padding: var(--padding__1);

  &:visited {
    color: inherit;
  }
}
</style>
