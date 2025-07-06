<template>
  <div
    @mousedown="!isPressed && (isPressed = true)"
    @mouseup="isPressed && (isPressed = false)"
    @mouseenter="!isHover && (isHover = true)"
    @mouseleave="isHover && (isHover = false)"
    @click="isChecked = !isChecked"
    class="text_plain flex max-w-fit cursor-pointer items-start gap-2 text-sm"
  >
    <span v-if="(props.label?.length ?? 0) > 0 && props.labelAlign === 'left'">
      {{ props.label }}
    </span>

    <label
      @keydown.enter.prevent="isChecked = !isChecked"
      tabindex="0"
      :ariaLabel="props.ariaLabel"
      role="checkbox"
      class="relative flex items-center"
    >
      <input
        v-model="isChecked"
        @focus="isFocused = true"
        @blur="isFocused = false"
        class="hidden"
        aria-hidden="true"
        type="checkbox"
        :checked="isChecked"
        :disabled="props.disabled"
      />
      <span
        @click.stop.prevent="isChecked = !isChecked"
        class="checkmark aspect-square w-[20px] cursor-pointer rounded-(--border-radius__1) border-(length:--border-width__0) border-solid"
        :class="checkmarkClasses"
      ></span>
    </label>

    <span v-if="(props.label?.length ?? 0) > 0 && props.labelAlign === 'right'">
      {{ props.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import COLOR_BORDER_HOVER from "~/constants/color_border_hover";
import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";

const props = withDefaults(
  defineProps<{
    label?: string;
    labelAlign?: "left" | "right";
    ariaLabel: string;
    disabled?: boolean;
    palette?: keyof typeof COLOR_PALETTES_STYLES;
  }>(),
  {
    palette: "NEUTRAL",
    labelAlign: "right",
  }
);

const isDark = useDark();

const isChecked = defineModel<boolean>({ required: true });
const isPressed = ref(false);
const isFocused = ref(false);
const isHover = ref(false);

const checkmarkClasses = computed(() => [
  COLOR_PALETTES_STYLES[props.palette].BORDER.DEFAULT,
  COLOR_PALETTES_STYLES[props.palette].BG.DEFAULT,

  isHover.value ? COLOR_PALETTES_STYLES[props.palette].BORDER.HOVER : "",
  isHover.value ? COLOR_PALETTES_STYLES[props.palette].BG.HOVER : "",

  isChecked.value || isPressed.value
    ? COLOR_PALETTES_STYLES[props.palette].BORDER.ACTIVE
    : "",
  isChecked.value || isPressed.value
    ? COLOR_PALETTES_STYLES[props.palette].BG.ACTIVE
    : "",

  isFocused.value ? COLOR_PALETTES_STYLES[props.palette].BORDER.FOCUS : "",
  isFocused.value ? COLOR_PALETTES_STYLES[props.palette].BG.FOCUS : "",
]);

const checkmarkCheckedColor = computed(
  () => `var(${COLOR_BORDER_HOVER[props.palette][isDark ? "DARK" : "LIGHT"]})`
);
</script>

<style scoped>
.checkmark::after {
  content: "";
  display: none;
}

input:checked + .checkmark::after {
  display: block;
  width: 6px;
  height: 12px;
  border: solid v-bind("checkmarkCheckedColor");
  border-width: 0 2px 2px 0;
  position: absolute;
  left: 7px;
  top: 2px;
  transform: rotate(45deg);
}
</style>
