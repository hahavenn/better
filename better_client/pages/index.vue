<template>
  <ClientOnly>
    <UiContainer
      v-if="goalsStore.goals.length > 0"
      :grow="true"
      :fullWidth="true"
    >
      <UserGoal
        v-for="g in goalsStore.goals"
        :key="g.id"
        :goalId="g.id"
      />
    </UiContainer>
  </ClientOnly>

  <div class="flex shrink-0 max-xl:grow max-md:w-full xl:w-80">
    <UiContainer :fullWidth="true"> planned to learn </UiContainer>
  </div>

  <UiContainer :grow="true"> todo list with calendar </UiContainer>
</template>

<script lang="ts" setup>
import useGoalsStore from "~/stores/goals";

import UiContainer from "~/components/ui/Container/UiContainer.vue";
import UserGoal from "~/components/user/goal/UserGoal.vue";

const goalsStore = useGoalsStore();
</script>

<style scoped></style>
