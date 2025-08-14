import fs from "node:fs";
import path from "node:path";

const fileToGenerate = path.join(
  new URL(".", import.meta.url).pathname,
  "..",
  "..",
  "..",
  "app",
  "types",
  "color",
  "palettes_generated.ts"
);

/** used to generate color palettes as types for usage in project */
export default function generateColorPalettesType(palettes: string[]) {
  const formattedPalettes = palettes
    .map((p) => `"${p.toUpperCase()}"`)
    .join("|");
  const colorPalettesTypeContent = `export type ColorGeneratedPalettes = ${formattedPalettes};`;
  fs.writeFile(fileToGenerate, colorPalettesTypeContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Successful generate", fileToGenerate);
  });
}
