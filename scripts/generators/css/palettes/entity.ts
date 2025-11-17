import { writeFile } from "node:fs";
import { join } from "node:path";

/** generate for each entity (border, bg, text, icon and etc) colors with themes and states */
export default function generateColorEntity(
  entities: string[],
  themes: string[],
  states: string[],
  palettes: string[]
) {
  entities.forEach((e) => {
    const fileToGenerate = join(
      new URL(".", import.meta.url).pathname,
      "..",
      "..",
      "..",
      "..",
      "app",
      "constants",
      "color",
      `generated${e.charAt(0).toUpperCase().concat(e.slice(1))}.ts`
    );

    const content = states
      .map((s) => {
        const palettesFormatted = palettes
          .map((p) => {
            const themeFormatted = themes
              .map((t) => `${t.toUpperCase()}: "--plt-${p}-${e}-${t}-${s}"`)
              .join(",");

            return `${p.toUpperCase()}:{${themeFormatted}}`;
          })
          .join(",");

        return `/** ${e} ${s} tailwind classes */\n export const COLOR_GENERATED_${e.toUpperCase()}_${s.toUpperCase()} = {${palettesFormatted}} as const`;
      })
      .join("\n");

    writeFile(fileToGenerate, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successful generate", fileToGenerate);
    });
  });
}
