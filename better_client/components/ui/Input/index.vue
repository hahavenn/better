<template>
  <div
    class="group relative flex h-full w-full"
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
      class="peer h-full w-full rounded-(--border-radius__1) border-(length:--border-width) border-solid border-neutral-400 bg-transparent px-(--offset__0) py-0 outline-none group-hover:border-neutral-500 placeholder:text-neutral-400 focus:border-neutral-500 active:border-neutral-500 dark:border-neutral-600 dark:placeholder:text-neutral-500"
    />
    <button
      v-if="icon !== undefined"
      :type="buttonType"
      style="height: calc(100% - 2 * var(--border-width))"
      class="border-l-solid absolute top-(--border-width) right-(--border-width) flex w-[32px] items-center justify-center border-t-0 border-r-0 border-b-0 border-l-(length:--border-width) border-l-neutral-400 bg-transparent group-hover:border-neutral-500 peer-focus:border-neutral-500 peer-active:border-neutral-500 hover:cursor-pointer dark:border-l-neutral-600"
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
