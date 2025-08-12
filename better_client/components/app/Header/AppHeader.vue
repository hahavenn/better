<template>
  <header
    class="sticky top-0 left-0 z-[1] flex w-dvw flex-col items-center xl:w-full"
  >
    <UiContainer
      :responsive="true"
      :attachedTo="'top'"
      :fullWidth="true"
    >
      <div class="flex w-full flex-row items-center gap-5">
        <UiLink :preset="'home'">
          <span class="text_link text-2xl font-bold underline"> better </span>
        </UiLink>

        <AppSearch />
      </div>
    </UiContainer>
  </header>
</template>

<script lang="ts" setup>
import AppSearch from "~/components/app/Search/AppSearch.vue";
</script>

<style scoped></style>
