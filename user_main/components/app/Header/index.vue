<template>
  <div class="wrapper">
    <UiContainer
      :responsive="true"
      :attachedTo="'top'"
    >
      <header>
        <UiLink :preset="'home'">
          <UiText
            :type="'link'"
            :fontSize="'m'"
          >
            ha_edu
          </UiText>
        </UiLink>

        <AppSearch />
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
  align-items: center;
  gap: var(--offset__3);
}
</style>
