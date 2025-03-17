<template>
  <header>
    <LinkUI :type="'home'">
      <TextUI
        :type="'link'"
        :fontSize="'m'"
        :padding="'var(--padding__3) var(--padding__2)'"
      >
        ha_edu
      </TextUI>
    </LinkUI>
  </header>
</template>

<script lang="ts" setup>
import LinkUI from "~/components/ui/Link/LinkUI.vue";
import TextUI from "~/components/ui/Text/TextUI.vue";
</script>

<style scoped>
header {
  width: 100%;
  height: var(--header-height__desktop);
  padding: var(--padding__0);

  background-color: var(--background-color__1);

  border-radius: var(--border-radius__0);
  border: var(--border-width__0) solid var(--border-color__0);

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
