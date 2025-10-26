import { randomBytes } from "node:crypto";
import { appendFile } from "node:fs/promises";
import { resolve } from "node:path";

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
