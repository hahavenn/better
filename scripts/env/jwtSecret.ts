import { randomBytes } from "node:crypto";
import { appendFile } from "node:fs/promises";
import { resolve } from "node:path";

//#region jwtSecret
/**
 * This script is used to generate JWT secret key
 */
(async function () {
  try {
    randomBytes(64, async (err, buf) => {
      if (err) throw err;
      await appendFile(
        resolve(".", ".env"),
        `\nJWT_SECRET=${buf.toString("hex")}`
      );

      console.log("jwt secret successfully generated");
    });
  } catch (error) {
    console.error("error writing jwt secret to .env file");
  }
})();
//#endregion jwtSecret
