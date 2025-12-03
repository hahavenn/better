import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import generateColorPalettesType from "./type.ts";
import generateColorEntity from "./entity.ts";
import generatePalettesStyles from "./styles.ts";

export default async function runPalettesGenerators() {
  const cssContent = await readFile(
    resolve(process.cwd(), "app", "assets", "css", "colors", "index.css"),
    "utf-8"
  );

  // const cssVars = cssContent.match(
  //   /--plt-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+/g
  // );
  // console.log("cssVars", cssVars);

  const palettes = [...cssContent.matchAll(/\/\*(.*?)\*\//g)]
    ?.map((m) => m[1]?.trim())
    .filter((p) => p !== undefined);
  // console.log("palettes", palettes);

  const themes = [
    ...new Set(
      [
        ...cssContent.matchAll(
          /--plt-[a-zA-Z]+-[a-zA-Z]+-([a-zA-Z]+)-[a-zA-Z]+/g
        ),
      ].map((match) => match[1])
    ),
  ].filter((t) => t !== undefined);
  // console.log("themes", themes);

  const entities = [
    ...new Set(
      [
        ...cssContent.matchAll(
          /--plt-[a-zA-Z]+-([a-zA-Z]+)-[a-zA-Z]+-[a-zA-Z]+/g
        ),
      ].map((match) => match[1])
    ),
  ].filter((e) => e !== undefined);
  // console.log("entities", entities);

  const states = [
    ...new Set(
      [
        ...cssContent.matchAll(
          /--plt-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-([a-zA-Z]+)/g
        ),
      ].map((match) => match[1])
    ),
  ].filter((s) => s !== undefined);
  // console.log("states", states);

  generateColorPalettesType(palettes);
  generateColorEntity(entities, themes, states, palettes);
  generatePalettesStyles(entities, themes, states, palettes);
}
