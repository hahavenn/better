<template>
  <div
    class="group relative flex h-full w-full transition-[var(--transition__0)]"
    style="--border-width: var(--border-width__0)"
  >
    <label
      v-if="label && label.length > 0"
      :for="id"
      class="absolute [clip-path:circle(0)]"
    >
      {{ label }}
    </label>
    <input
      :id
      :type
      :placeholder
      :autocapitalize
      :autocomplete
      class="peer h-full w-full rounded-[var(--border-radius__1)] border-[length:var(--border-width)] border-solid border-[color:var(--theme-border-color__0)] bg-transparent px-[var(--offset__0)] py-0 text-[var(--theme-font-color__0)] outline-none group-hover:border-[color:var(--theme-border-color__1)] placeholder:text-[var(--theme-font-color__2)] focus:border-[color:var(--theme-border-color__1)] active:border-[color:var(--theme-border-color__1)]"
    />
    <button
      v-if="icon !== undefined"
      :type="buttonType"
      style="height: calc(100% - 2 * var(--border-width))"
      class="border-l-solid absolute top-[var(--border-width)] right-[var(--border-width)] flex w-[32px] items-center justify-center border-t-0 border-r-0 border-b-0 border-l-[length:var(--border-width)] border-l-[color:var(--theme-border-color__0)] bg-transparent group-hover:border-[color:var(--theme-border-color__1)] peer-focus:border-[color:var(--theme-border-color__1)] peer-active:border-[color:var(--theme-border-color__1)] hover:cursor-pointer"
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

<style scoped></style>
