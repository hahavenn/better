<template>
  <header>
    <ContainerUI>
      <div class="inner">
        <LinkUI :type="'home'">
          <TextUI
            :type="'link'"
            :fontSize="'m'"
            :padding="'var(--offset__3) 0'"
          >
            ha_edu
          </TextUI>
        </LinkUI>
      </div>
    </ContainerUI>
  </header>
</template>

<script lang="ts" setup>
import ContainerUI from "~/components/ui/Container/ContainerUI.vue";
import LinkUI from "~/components/ui/Link/LinkUI.vue";
import TextUI from "~/components/ui/Text/TextUI.vue";
</script>

<style scoped>
.inner {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
