import COLOR_PALETTE_DEFAULT from "~/constants/color/defaultPalette";
import COLOR_GENERATED_PALETTES_CLASSES from "~/constants/color/generatedPalettesClasses";
import type { ColorGeneratedPalettes } from "~/types/color/generatedPalettes";

/** randomly pick color palette */
export default function pickPalette(params?: {
  /** pick palettes only from `included` */
  include?: ColorGeneratedPalettes[];
  /** pick any other palette not in `excluded` */
  exclude?: ColorGeneratedPalettes[];
}): ColorGeneratedPalettes {
  const availablePalettes = (
    Object.keys(
      COLOR_GENERATED_PALETTES_CLASSES
    ) as (keyof typeof COLOR_GENERATED_PALETTES_CLASSES)[]
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
