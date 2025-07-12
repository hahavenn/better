import COLOR_PALETTES_STYLES, {
  COLOR_PALETTE_DEFAULT,
} from "~/constants/color_palettes";
import type { ColorPalettes } from "~/types/color_palettes";

/** randomly pick color palette */
export default function pickPalette(params?: {
  /** pick palettes only from `included` */
  include?: ColorPalettes[];
  /** pick any other palette not in `excluded` */
  exclude?: ColorPalettes[];
}): ColorPalettes {
  const availablePalettes = (
    Object.keys(COLOR_PALETTES_STYLES) as (keyof typeof COLOR_PALETTES_STYLES)[]
  ).filter((palette) => {
    const isIncluded = params?.include
      ? params.include.includes(palette)
      : true;
    const isExcluded = params?.exclude
      ? params.exclude.includes(palette)
      : false;
    return isIncluded && !isExcluded;
  });

  // no palettes available - return default palette
  if (availablePalettes.length === 0) {
    return COLOR_PALETTE_DEFAULT;
  }

  return availablePalettes[
    Math.floor(Math.random() * availablePalettes.length)
  ];
}
