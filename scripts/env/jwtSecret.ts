import { generateKey } from "node:crypto";
import { appendFile } from "node:fs/promises";
import { resolve } from "node:path";

(async function () {
  try {
    generateKey("hmac", { length: 512 }, async (err, key) => {
      if (err) throw err;
      const envFilePath = resolve(".", ".env");
      const jwtSecret = key.export().toString("hex");

      await appendFile(envFilePath, `\nJWT_SECRET=${jwtSecret}`);

      console.log("jwt secret successfully generated");
    });
  } catch (error) {
    console.error("error writing jwt secret to .env file");
  }
})();
