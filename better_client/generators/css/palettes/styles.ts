import fs from "node:fs";
import path from "node:path";

const STATE_PREFIX_MAP = new Map([
  ["default", ""],
  ["hover", "hover:"],
  ["active", "active:"],
  ["focus", "focus:"],
]);
const THEME_PREFIX_MAP = new Map([
  ["light", ""],
  ["dark", "dark:"],
]);

function formatStates(
  entity: string,
  palette: string,
  states: string[],
  themes: string[]
) {
  return states
    .map((s) => {
      const themeFormatted = themes
        .map((t) => {
          return `${THEME_PREFIX_MAP.get(t)}${STATE_PREFIX_MAP.get(s)}${entity}-(--plt-${palette.toLowerCase()}-${entity}-${t}-${s})`;
        })
        .join(" ");

      return `${s.toUpperCase()}:"${themeFormatted}"`;
    })
    .join(",\n");
}

export default function generatePalettesStyles(
  entities: string[],
  themes: string[],
  states: string[],
  palettes: string[]
) {
  const fileToGenerate = path.join(
    new URL(".", import.meta.url).pathname,
    "..",
    "..",
    "..",
    "constants",
    "color",
    "generated_palettes_classes.ts"
  );

  const palettesFormatted = palettes
    .map((p) => {
      const entitiesFormatted = entities
        .map((e) => {
          return `${e.toUpperCase()}:{${formatStates(e, p, states, themes)}}`;
        })
        .join(",\n");

      return `${p.toUpperCase()}: {${entitiesFormatted}}`;
    })
    .join(",\n");

  const content = `/** All color palettes, that used in project */\nconst COLOR_GENERATED_PALETTES_CLASSES = {\n${palettesFormatted}\n};\nexport default COLOR_GENERATED_PALETTES_CLASSES`;

  fs.writeFile(fileToGenerate, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Successful generate", fileToGenerate);
  });
}
