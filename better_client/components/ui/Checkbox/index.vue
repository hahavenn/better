<template>
  <div class="flex items-center gap-2">
    <span v-if="props.leftText">
      {{ props.leftText }}
    </span>
    <label
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      class="relative flex cursor-pointer items-center"
    >
      <input
        v-model="isChecked"
        @focus="isFocused = true"
        @blur="isFocused = false"
        class="hidden"
        type="checkbox"
        :checked="isChecked"
        :ariaLabel="props.ariaLabel"
      />
      <span
        class="checkmark aspect-square w-[20px] rounded-(--border-radius__1) border-(length:--border-width__0) border-solid"
        :class="checkmarkClasses"
      ></span>
    </label>
    <span v-if="props.rightText">
      {{ props.rightText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import COLOR_BORDER_ACTIVE from "~/constants/color_border_active";
import { COLOR_PALETTES_STYLES } from "~/constants/color_palettes_styles";

const props = withDefaults(
  defineProps<{
    leftText?: string;
    rightText?: string;
    ariaLabel: string;
    disabled?: boolean;
    palette?: keyof typeof COLOR_PALETTES_STYLES;
  }>(),
  {
    palette: "NEUTRAL",
  }
);

const isDark = useDark();
watch(isDark, (v) => console.log("isDark", v));

const isChecked = defineModel<boolean>({ default: false });
const isPressed = ref(false);
const isFocused = ref(false);
const isHover = ref(false);

const checkmarkClasses = computed(() => [
  COLOR_PALETTES_STYLES[props.palette].BORDER.DEFAULT,
  COLOR_PALETTES_STYLES[props.palette].BG.DEFAULT,

  isChecked.value ? COLOR_PALETTES_STYLES[props.palette].BORDER.ACTIVE : "",
  isChecked.value ? COLOR_PALETTES_STYLES[props.palette].BG.ACTIVE : "",

  isPressed.value || isHover.value
    ? COLOR_PALETTES_STYLES[props.palette].BORDER.HOVER
    : "",
  isPressed.value || isHover.value
    ? COLOR_PALETTES_STYLES[props.palette].BG.HOVER
    : "",

  isFocused.value ? COLOR_PALETTES_STYLES[props.palette].BORDER.FOCUS : "",
  isFocused.value ? COLOR_PALETTES_STYLES[props.palette].BG.FOCUS : "",
]);

const checkmarkCheckedColor = computed(
  () => `var(${COLOR_BORDER_ACTIVE[props.palette][isDark ? "DARK" : "LIGHT"]})`
);
</script>

<style scoped>
.checkmark::after {
  content: "";
  /* Hide the checkmark by default */
  display: none;
}

input:checked + .checkmark::after {
  display: block; /* Show the checkmark when checked */
  width: 5px; /* Width of the checkmark */
  height: 10px; /* Height of the checkmark */
  border: solid v-bind("checkmarkCheckedColor"); /* Color of the checkmark */
  border-width: 0 2px 2px 0; /* Create a checkmark shape */
  position: absolute; /* Position the checkmark */
  left: 7px; /* Position from the left */
  top: 2px; /* Position from the top */
  transform: rotate(45deg); /* Rotate to form a checkmark */
}
</style>
