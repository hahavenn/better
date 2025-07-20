import fs from "node:fs";
import path from "node:path";

import generateColorPalettesType from "./palettes_type.ts";
import generateColorEntity from "./entity.ts";
import generatePalettesStyles from "./palettes.ts";

const dirname = new URL(".", import.meta.url).pathname;

const watchFile = path.join(
  dirname,
  "..",
  "..",
  "assets",
  "css",
  "colors",
  "index.css"
);

fs.readFile(watchFile, "utf-8", (err, data) => {
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
        ...data.matchAll(/--plt-[a-zA-Z]+-[a-zA-Z]+-([a-zA-Z]+)-[a-zA-Z]+/g),
      ].map((match) => match[1])
    ),
  ];
  // console.log("themes", themes);

  const entities = [
    ...new Set(
      [
        ...data.matchAll(/--plt-[a-zA-Z]+-([a-zA-Z]+)-[a-zA-Z]+-[a-zA-Z]+/g),
      ].map((match) => match[1])
    ),
  ] as ["border", "icon", "bg", "text"];
  // console.log("entities", entities);

  const states = [
    ...new Set(
      [
        ...data.matchAll(/--plt-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-([a-zA-Z]+)/g),
      ].map((match) => match[1])
    ),
  ];
  // console.log("states", states);

  generateColorPalettesType(palettes);
  generateColorEntity(entities, themes, states, palettes);
  generatePalettesStyles(entities, themes, states, palettes);
});
