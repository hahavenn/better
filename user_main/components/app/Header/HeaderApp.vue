<template>
  <header>
    <LinkUI :type="'home'">
      <span class="home_link">ha_edu</span>
    </LinkUI>
  </header>
</template>

<script lang="ts" setup>
import LinkUI from "~/components/ui/Link/LinkUI.vue";
</script>

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

.home_link {
  text-decoration: none;
  font-size: var(--font-size__6);

  display: inline-block;
  padding: var(--padding__1);

  &:visited {
    color: inherit;
  }
}
</style>
