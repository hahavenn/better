<template>
  <div
    @mousedown="!pressed && (pressed = true)"
    @mouseup="pressed && (pressed = false)"
    @mouseenter="!hover && (hover = true)"
    @mouseleave="hover && (hover = false)"
    @click="checkHandler"
    class="text_plain flex max-w-fit cursor-pointer items-start gap-2 text-sm"
  >
    <span
      v-if="(props.label?.length ?? 0) > 0"
      :style="{
        textDecoration: props.crossOut && check ? 'line-through' : '',
        order: props.labelAlign === 'left' ? 0 : 1,
      }"
    >
      {{ props.label }}
    </span>

    <label
      @keydown.enter.stop.prevent="checkHandler"
      tabindex="0"
      :ariaLabel="props.ariaLabel"
      role="checkbox"
      class="relative flex items-center"
    >
      <input
        v-model="check"
        @focus="focused = true"
        @blur="focused = false"
        class="hidden"
        aria-hidden="true"
        type="checkbox"
        :checked="check"
        :disabled="props.disabled"
      />
      <span
        @click.stop.prevent="checkHandler"
        class="checkmark aspect-square w-[20px] cursor-pointer rounded-(--border-radius__1) border-(length:--border-width__0) border-solid"
        :class="checkmarkClasses"
      ></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { COLOR_BORDER_HOVER } from "~/constants/color_border";
import COLOR_PALETTES_STYLES, {
  COLOR_PALETTE_DEFAULT,
} from "~/constants/color_palettes";

const props = withDefaults(
  defineProps<{
    label?: string;
    labelAlign?: "left" | "right";
    ariaLabel: string;
    /** should label be crossed out when checked */
    crossOut?: boolean;

    /** @todo styles and behavior */
    disabled?: boolean;

    palette?: keyof typeof COLOR_PALETTES_STYLES;
  }>(),
  {
    labelAlign: "right",

    palette: COLOR_PALETTE_DEFAULT,
  }
);

const emit = defineEmits<{
  /** when checkbox value is changed */
  toggle: [check: boolean];
}>();

const isDark = useDark();

const check = defineModel<boolean>({ required: true });
const pressed = ref(false);
const focused = ref(false);
const hover = ref(false);

async function checkHandler() {
  check.value = !check.value;

  /* 
    need to wait until vue updates v-model value 
    for passing correct value to emit argument
  */
  await nextTick();

  emit("toggle", check.value);
}

const checkmarkClasses = computed(() => [
  COLOR_PALETTES_STYLES[props.palette].BORDER.DEFAULT,
  COLOR_PALETTES_STYLES[props.palette].BG.DEFAULT,

  hover.value ? COLOR_PALETTES_STYLES[props.palette].BORDER.HOVER : "",
  hover.value ? COLOR_PALETTES_STYLES[props.palette].BG.HOVER : "",

  check.value || pressed.value
    ? COLOR_PALETTES_STYLES[props.palette].BORDER.ACTIVE
    : "",
  check.value || pressed.value
    ? COLOR_PALETTES_STYLES[props.palette].BG.ACTIVE
    : "",

  focused.value ? COLOR_PALETTES_STYLES[props.palette].BORDER.FOCUS : "",
  focused.value ? COLOR_PALETTES_STYLES[props.palette].BG.FOCUS : "",
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
