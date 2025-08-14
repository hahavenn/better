import fs from "node:fs";
import path from "node:path";

import generateColorPalettesType from "./type.ts";
import generateColorEntity from "./entity.ts";
import generatePalettesStyles from "./styles.ts";

export default function runPalettesGenerators() {
  fs.readFile(
    path.join(
      new URL(".", import.meta.url).pathname,
      "..",
      "..",
      "..",
      "app",
      "assets",
      "css",
      "colors",
      "index.css"
    ),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // const cssVars = data.match(/--plt-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+/g);
      // console.log("cssVars", cssVars);

      const palettes = [...data.matchAll(/\/\*(.*?)\*\//g)]?.map((m) =>
        m[1].trim()
      );
      // console.log("palettes", palettes);

      const themes = [
        ...new Set(
          [
            ...data.matchAll(
              /--plt-[a-zA-Z]+-[a-zA-Z]+-([a-zA-Z]+)-[a-zA-Z]+/g
            ),
          ].map((match) => match[1])
        ),
      ];
      // console.log("themes", themes);

      const entities = [
        ...new Set(
          [
            ...data.matchAll(
              /--plt-[a-zA-Z]+-([a-zA-Z]+)-[a-zA-Z]+-[a-zA-Z]+/g
            ),
          ].map((match) => match[1])
        ),
      ];
      // console.log("entities", entities);

      const states = [
        ...new Set(
          [
            ...data.matchAll(
              /--plt-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-([a-zA-Z]+)/g
            ),
          ].map((match) => match[1])
        ),
      ];
      // console.log("states", states);

      generateColorPalettesType(palettes);
      generateColorEntity(entities, themes, states, palettes);
      generatePalettesStyles(entities, themes, states, palettes);
    }
  );
}
