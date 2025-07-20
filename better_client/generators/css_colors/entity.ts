import fs from "node:fs";
import path from "node:path";

import THEME_NAME_MAP from "../../constants/theme_name_map.ts";

const dirname = new URL(".", import.meta.url).pathname;
const generateDir = path.join(dirname, "..", "..", "constants", "color");

/** generate for each entity (border, bg, text, icon and etc) colors with themes and states */
export default function generateColorEntity(
  entities: string[],
  themes: string[],
  states: string[],
  palettes: string[]
) {
  entities.forEach((e) => {
    const fileToGenerate = path.join(generateDir, `${e}.ts`);

    const content = states
      .map((s) => {
        const palettesFormatted = palettes
          .map((p) => {
            const themeFormatted = themes
              .map(
                (t) =>
                  `${THEME_NAME_MAP.get(t.toLowerCase())?.toUpperCase()}: "--plt-${p.toLowerCase()}-${e.toLowerCase()}-${t.toLowerCase()}-${s.toLowerCase()}"`
              )
              .join(",");

            return `${p.toUpperCase()}:{${themeFormatted}}`;
          })
          .join(",");

        return `/** ${e.toLowerCase()} ${s.toLowerCase()} tailwind classes */\n export const COLOR_${e.toUpperCase()}_${s.toUpperCase()} = {${palettesFormatted}} as const`;
      })
      .join("\n");

    fs.writeFile(fileToGenerate, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successful generate", fileToGenerate);
    });
  });
}
