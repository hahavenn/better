<template>
  <header>
    <UiContainer>
      <div class="inner">
        <UiLink :type="'home'">
          <UiText
            :type="'link'"
            :fontSize="'m'"
            :padding="'var(--offset__3) 0'"
          >
            ha_edu
          </UiText>
        </UiLink>
      </div>
    </UiContainer>
  </header>
</template>

<script lang="ts" setup></script>

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
