<template>
  <div class="wrapper">
    <UiContainer
      :responsive="true"
      :header="true"
    >
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
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
