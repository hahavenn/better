<template>
  <form
    role="search"
    aria-label="Site search"
  >
    <label :for="id"></label>
    <input
      :id
      type="text"
      placeholder="Search"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
    />
  </form>
</template>

<script lang="ts" setup>
/**
 * @todo add i18n
 * @todo add search-icon inside label element
 * @todo add button for 'submit' search form
 */

const id = useId();
</script>

<style scoped>
form {
  position: relative;

  display: flex;
}

input {
  height: 36px;
  width: 220px;

  padding: 0 var(--offset__0);

  background-color: transparent;

  border: var(--border-width__0) solid var(--theme-border-color__0);
  border-radius: var(--border-radius__1);

  color: var(--theme-font-color__0);

  transition: var(--transition__0);

  outline: none;

  &::placeholder {
    color: var(--theme-font-color__2);
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--theme-border-color__1);
    }
  }

  &:active,
  &:focus {
    border-color: var(--theme-border-color__1);
  }
}
</style>
