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

  <div class="flex shrink-0 max-xl:grow max-md:w-full xl:w-[360px]">
    <UiContainer :fullWidth="true"> planned to learn </UiContainer>
  </div>

  <UiContainer :grow="true"> todo list with calendar </UiContainer>
</template>

<script lang="ts" setup></script>

<style scoped></style>
