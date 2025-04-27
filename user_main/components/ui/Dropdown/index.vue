<template>
  <div class="dropdown">
    <button
      class="dropdown_toggle"
      :aria-expanded="open"
      :aria-controls="id"
      :title="props.title"
    >
      <UiText :type="'plain'">
        {{ props.title }}
      </UiText>
    </button>
    <ul :id>
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * Title of the dropdown. Shown in control button
   */
  title: string;
}>();

const id = useId();

const open = ref(false);
</script>

<style scoped>
.dropdown_toggle {
  background: transparent;
  border: none;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
}

ul {
  list-style: none;
}
</style>
