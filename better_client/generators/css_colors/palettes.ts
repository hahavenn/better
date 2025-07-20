import fs from "node:fs";
import path from "node:path";
import type COLOR_ENTITIES from "~/constants/color/entities";

import COLOR_STATES from "~/constants/color/states";
import type COLOR_THEMES from "~/constants/color/themes";
import type { ColorPalettes } from "~/types/color_palettes";

const dirname = new URL(".", import.meta.url).pathname;
const generateDir = path.join(dirname, "..", "..", "constants", "color");

type States = (typeof COLOR_STATES)[number];
type Themes = (typeof COLOR_THEMES)[number];
type Entities = (typeof COLOR_ENTITIES)[number];

const STATE_PREFIX_MAP = new Map<States, string>([
  ["default", ""],
  ["hover", "hover:"],
  ["active", "active:"],
  ["focus", "focus:"],
]);
const THEME_PREFIX_MAP = new Map<Themes, string>([
  ["l", ""],
  ["d", "dark:"],
]);

const templates = {
  border(palette: string, states: string[], themes: string[]) {
    return states
      .map((s) => {
        const themeFormatted = themes
          .map((t) => {
            return `${THEME_PREFIX_MAP.get(t.toLowerCase())}${STATE_PREFIX_MAP.get(s.toLowerCase())}border-(--plt-${palette.toLowerCase()}-border-${t.toLowerCase()}-${s.toLowerCase()})`;
          })
          .join(" ");

        return `${s.toUpperCase()}:"${themeFormatted}"`;
      })
      .join(",\n");
  },
  icon(palette: string, states: string[], themes: string[]) {
    return states
      .map((s) => {
        const themeFormatted = themes
          .map((t) => {
            return `${THEME_PREFIX_MAP.get(t.toLowerCase())}${STATE_PREFIX_MAP.get(s.toLowerCase())}fill-(--plt-${palette.toLowerCase()}-icon-${t.toLowerCase()}-${s.toLowerCase()})`;
          })
          .join(" ");

        return `${s.toUpperCase()}:"${themeFormatted}"`;
      })
      .join(",\n");
  },
  bg(palette: string, states: string[], themes: string[]) {
    return states
      .map((s) => {
        const themeFormatted = themes
          .map((t) => {
            return `${THEME_PREFIX_MAP.get(t.toLowerCase())}${STATE_PREFIX_MAP.get(s.toLowerCase())}bg-(--plt-${palette.toLowerCase()}-bg-${t.toLowerCase()}-${s.toLowerCase()})`;
          })
          .join(" ");

        return `${s.toUpperCase()}:"${themeFormatted}"`;
      })
      .join(",\n");
  },
  text(palette: string, states: string[], themes: string[]) {
    return states
      .map((s) => {
        const themeFormatted = themes
          .map((t) => {
            return `${THEME_PREFIX_MAP.get(t.toLowerCase())}${STATE_PREFIX_MAP.get(s.toLowerCase())}text-(--plt-${palette.toLowerCase()}-text-${t.toLowerCase()}-${s.toLowerCase()})`;
          })
          .join(" ");

        return `${s.toUpperCase()}:"${themeFormatted}"`;
      })
      .join(",\n");
  },
};

export default function generatePalettesStyles(
  entities: typeof COLOR_ENTITIES,
  themes: typeof COLOR_THEMES,
  states: typeof COLOR_STATES,
  palettes: ColorPalettes[]
) {
  const fileToGenerate = path.join(generateDir, "color_palettes_classes.ts");

  const palettesFormatted = palettes
    .map((p) => {
      const entitiesFormatted = entities
        .map((e) => {
          return `${e.toUpperCase()}:{${templates[e](p, states, themes)}}`;
        })
        .join(",\n");

      return `${p.toUpperCase()}: {${entitiesFormatted}}`;
    })
    .join(",\n");

  const content = `/** All color palettes, that used in project */\nconst COLOR_PALETTES_CLASSES = {${palettesFormatted}}; export default COLOR_PALETTES_CLASSES`;

  fs.writeFile(fileToGenerate, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Successful generate", fileToGenerate);
  });
}
