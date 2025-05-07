<template>
  <div class="fixed top-0 flex w-full flex-col items-center">
    <UiContainer
      :responsive="true"
      :attachedTo="'attachment__top'"
    >
      <header class="flex w-full flex-row items-center gap-[var(--offset__3)]">
        <UiLink :preset="'home'">
          <UiText
            :type="'link'"
            :fontSize="'size__m'"
            :hoverStyles="true"
          >
            better
          </UiText>
        </UiLink>

        <AppSearch />
      </header>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
