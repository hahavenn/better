import COLOR_PALETTES_STYLES from "~/constants/color_palettes_styles";
import type { ColorPalettes } from "~/types/color_palettes";

export default function pickPalette() {
  return Object.keys(COLOR_PALETTES_STYLES)[
    Math.floor(Math.random() * Object.keys(COLOR_PALETTES_STYLES).length)
  ] as ColorPalettes;
}
