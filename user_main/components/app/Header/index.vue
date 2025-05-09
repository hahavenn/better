<template>
  <div class="fixed top-0 flex w-full flex-col items-center">
    <UiContainer
      :responsive="true"
      :attachedTo="'attachment__top'"
      :fullWidth="true"
    >
      <header class="flex w-full flex-row items-center gap-(--offset__3)">
        <UiLink :preset="'home'">
          <span class="text-m text-hover underline">better</span>
        </UiLink>

        <AppSearch />
      </header>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
