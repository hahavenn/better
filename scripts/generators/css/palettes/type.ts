import { writeFile } from "node:fs";
import { join } from "node:path";

const fileToGenerate = join(
  process.cwd(),
  "app",
  "types",
  "color",
  "generatedPalettes.ts"
);

/** used to generate color palettes as types for usage in project */
export default function generateColorPalettesType(palettes: string[]) {
  const formattedPalettes = palettes
    .map((p) => `"${p.toUpperCase()}"`)
    .join("|");
  const colorPalettesTypeContent = `export type ColorGeneratedPalettes = ${formattedPalettes};`;
  writeFile(fileToGenerate, colorPalettesTypeContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Successful generate", fileToGenerate);
  });
}
