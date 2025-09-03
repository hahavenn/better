<template>
  <div
    @mouseenter="!hover && (hover = true)"
    @mouseleave="hover && (hover = false)"
    class="relative flex h-full w-full"
    style="--size: 1px"
  >
    <label
      v-if="label && label.length > 0"
      :for="id"
      class="absolute [clip-path:circle(0)]"
    >
      {{ label }}
    </label>
    <input
      v-model="inputModel"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="emit('enter')"
      :id
      :type
      :placeholder
      :autocapitalize
      class="peer h-full w-full rounded-sm border-(length:--size) border-solid px-2.5 py-0 outline-none"
      :style="inputStyles"
    />
    <button
      v-if="icon !== undefined"
      :type="buttonType"
      class="border-l-solid absolute top-(--size) right-(--size) flex w-8 cursor-pointer items-center justify-center border-t-0 border-r-0 border-b-0 border-l-(length:--size)"
      style="height: calc(100% - 2 * var(--size))"
      :style="buttonStyles"
    >
      <UiIcon
        :icon
        :palette
        :state="iconState"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from "vue";

import { InputUIPresets } from "./presets";
import type { InputUIProps } from "./types";

import COLOR_PALETTE_DEFAULT from "~/constants/color/defaultPalette";
import { COLOR_GENERATED_BG_DEFAULT } from "~/constants/color/generatedBg";
import {
  COLOR_GENERATED_BORDER_DEFAULT,
  COLOR_GENERATED_BORDER_FOCUS,
  COLOR_GENERATED_BORDER_HOVER,
} from "~/constants/color/generatedBorder";

import type { IconState } from "~/components/ui/Icon/types";

const props = withDefaults(defineProps<InputUIProps>(), {
  placeholder: "",
  autocapitalize: "",
  buttonType: "button",
  type: "text",
  palette: COLOR_PALETTE_DEFAULT,
});

const emit = defineEmits<{
  enter: [];
}>();

const inputModel = defineModel<string>({
  required: true,
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

const buttonType = computed(() =>
  props.preset ? InputUIPresets[props.preset].buttonType : props.buttonType
);
const icon = computed(() =>
  props.preset ? InputUIPresets[props.preset].icon : props.icon
);

const isDarkTheme = useDark();
const focused = shallowRef(false);
const hover = shallowRef(false);

const bgColor = computed(() =>
  isDarkTheme.value
    ? COLOR_GENERATED_BG_DEFAULT[props.palette].DARK
    : COLOR_GENERATED_BG_DEFAULT[props.palette].LIGHT
);
const borderColor = computed(() => {
  switch (true) {
    case hover.value: {
      return isDarkTheme.value
        ? COLOR_GENERATED_BORDER_HOVER[props.palette].DARK
        : COLOR_GENERATED_BORDER_HOVER[props.palette].LIGHT;
    }
    case focused.value: {
      return isDarkTheme.value
        ? COLOR_GENERATED_BORDER_FOCUS[props.palette].DARK
        : COLOR_GENERATED_BORDER_FOCUS[props.palette].LIGHT;
    }
    default: {
      return isDarkTheme.value
        ? COLOR_GENERATED_BORDER_DEFAULT[props.palette].DARK
        : COLOR_GENERATED_BORDER_DEFAULT[props.palette].LIGHT;
    }
  }
});

const inputStyles = computed<CSSProperties>(() => ({
  borderColor: `var(${borderColor.value})`,
  backgroundColor: `var(${bgColor.value})`,
}));
const buttonStyles = computed<CSSProperties>(() => ({
  borderColor: `var(${borderColor.value})`,
}));

const iconState = computed<IconState>(() => {
  switch (true) {
    case hover.value: {
      return "state__hover";
    }
    case focused.value: {
      return "state__active";
    }
    default: {
      return "state__default";
    }
  }
});
</script>

<style scoped></style>
