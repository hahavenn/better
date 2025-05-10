<template>
  <ClientOnly>
    <UiContainer
      :grow="true"
      :fullWidth="true"
    >
      <UserGoal />
    </UiContainer>
    <template #fallback> </template>
  </ClientOnly>

  <div
    class="desktop:w-[360px] max-tablet:w-full max-desktop:grow flex shrink-0"
  >
    <UiContainer :fullWidth="true"> planned to learn </UiContainer>
  </div>

  <UiContainer :grow="true"> todo list with calendar </UiContainer>
</template>

<script lang="ts" setup></script>

<style scoped></style>
