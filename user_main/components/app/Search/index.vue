<template>
  <form
    role="search"
    aria-label="Site search"
  >
    <label :for="id">Search</label>
    <input
      :id
      type="text"
      placeholder="Search"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
    />
    <button type="submit">
      <UiIcon :icon="'search'" />
    </button>
  </form>
</template>

<script lang="ts" setup>
/**
 * @todo add i18n
 * @todo add search-icon inside label element
 * @todo add button for 'submit' search form
 * @todo 'Search' inside <label> and placeholder are same. Move to i18n
 */

const id = useId();
</script>

<style scoped>
form {
  position: relative;

  display: flex;

  transition: var(--transition__0);

  --border-width__local: var(--border-width__0);
  --border: var(--border-width__local) solid var(--theme-border-color__0);
}

/**
 * Should be visible only for screen readers
 */
label {
  position: absolute;
  clip-path: circle(0);
}

input {
  height: 36px;
  width: 220px;

  padding: 0 var(--offset__0);

  background-color: transparent;

  border: var(--border);
  border-radius: var(--border-radius__1);

  color: var(--theme-font-color__0);

  outline: none;

  &::placeholder {
    color: var(--theme-font-color__2);
  }
}

button {
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: calc(100% - 2 * var(--border-width__local));

  position: absolute;
  right: var(--border-width__local);
  top: var(--border-width__local);

  border-left: var(--border);
  border-top: none;
  border-right: none;
  border-bottom: none;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
}

input:active,
input:focus {
  &,
  & ~ button {
    border-color: var(--theme-border-color__1);
  }
}

@media (hover: hover) {
  form:hover {
    button,
    input {
      border-color: var(--theme-border-color__1);
    }
  }
}
</style>
