<template>
  <header class="fixed top-0 z-[1] flex w-full flex-col items-center">
    <UiContainer
      :responsive="true"
      :attachedTo="'attachment__top'"
      :fullWidth="true"
    >
      <div class="flex w-full flex-row items-center gap-(--offset__3)">
        <UiLink :preset="'home'">
          <span class="text_link text-2xl font-bold underline"> better </span>
        </UiLink>

        <AppSearch />
      </div>
    </UiContainer>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped></style>
