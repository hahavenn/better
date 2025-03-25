<template>
  <UiContainer :responsive="true">
    <header>
      <UiLink :type="'home'">
        <UiText
          :type="'link'"
          :fontSize="'m'"
        >
          ha_edu
        </UiText>
      </UiLink>
    </header>
  </UiContainer>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
