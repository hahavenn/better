import COLOR_PALETTE_DEFAULT from "~/constants/color/defaultPalette";
import COLOR_GENERATED_PALETTES_CLASSES from "~/constants/color/generatedPalettesClasses";
import type { ColorGeneratedPalettes } from "~/types/color/generatedPalettes";

type PickPaletteParams = {
  /** pick palettes only from `included` */
  include?: ColorGeneratedPalettes[];

  /** pick any other palette not in `excluded` */
  exclude?: ColorGeneratedPalettes[];
};

/** randomly pick color palette */
export default function pickPalette(
  params?: PickPaletteParams
): ColorGeneratedPalettes {
  const available = (
    Object.keys(COLOR_GENERATED_PALETTES_CLASSES) as ColorGeneratedPalettes[]
  ).filter((palette) => {
    const isIncluded = params?.include?.includes(palette) ?? true;

    const isExcluded = params?.exclude?.includes(palette) ?? false;

    return isIncluded && !isExcluded;
  });

  if (available.length === 0) {
    return COLOR_PALETTE_DEFAULT;
  }

  return available[
    Math.floor(Math.random() * available.length)
  ] as ColorGeneratedPalettes;
}
