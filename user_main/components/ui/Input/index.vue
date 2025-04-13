<template>
  <div class="ui-input">
    <label
      v-if="label && label.length > 0"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id
      :type
      :placeholder
      :autocapitalize
      :autocomplete
    />
    <button
      v-if="icon !== undefined"
      :type="buttonType"
    >
      <UiIcon :icon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { InputUIPresets } from "./presets";
import type { InputUIProps } from "./types";

const props = withDefaults(defineProps<InputUIProps>(), {
  placeholder: "",
  autocapitalize: "",
  autocomplete: "",
  buttonType: "button",
  type: "text",
});

const id = useId();

const label = computed(() =>
  props.preset ? InputUIPresets[props.preset].label : props.label
);

const type = computed(() =>
  props.preset ? InputUIPresets[props.preset].type : props.type
);
const placeholder = computed(() =>
  props.preset ? InputUIPresets[props.preset].placeholder : props.placeholder
);
const autocapitalize = computed(() =>
  props.preset
    ? InputUIPresets[props.preset].autocapitalize
    : props.autocapitalize
);
const autocomplete = computed(() =>
  props.preset ? InputUIPresets[props.preset].autocomplete : props.autocomplete
);

const buttonType = computed(() =>
  props.preset ? InputUIPresets[props.preset].buttonType : props.buttonType
);
const icon = computed(() =>
  props.preset ? InputUIPresets[props.preset].icon : props.icon
);
</script>

<style scoped>
.ui-input {
  display: flex;

  width: 100%;
  height: 100%;

  position: relative;

  transition: var(--transition__0);

  --border-width__local: var(--border-width__0);
  --border: var(--border-width__local) solid var(--theme-border-color__0);

  label {
    /* Should be visible only for screen readers */
    position: absolute;
    clip-path: circle(0);
  }

  input {
    height: 100%;
    width: 100%;

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
    &:hover {
      button,
      input {
        border-color: var(--theme-border-color__1);
      }
    }
  }
}
</style>
