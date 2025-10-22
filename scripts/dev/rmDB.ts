import { rm } from "node:fs/promises";
import path from "node:path";

//#region rmDB
/**
 * This script is used to remove main file of database
 */
(async function () {
  const rmPath = path.resolve(path.resolve("."), "server", "db", "main.db");
  rm(rmPath).catch(() => console.log("no file"));
})();
//#endregion
