import { rm } from "node:fs/promises";
import path from "node:path";

//#region rmDB
/**
 * This script is used to remove file of database
 *
 * @description
 * When calling this script - make sure to pass argument as name of db to remove
 *
 * @example
 * ```
 * ts-node scripts/dev/rmDB.ts test,
 * ```
 */
(async function () {
  const rmPath = path.resolve(".", `${process.argv[2]}.db`);
  rm(rmPath).catch(() => console.log("no file"));
})();
//#endregion
