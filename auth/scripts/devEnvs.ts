import * as fs from "node:fs";

/**
 * Generate dev env variables:
 * - HOST - host server running on
 * - PORT - port server running on
 * - DEV - is development mode enabled
 * - CORS_CLIENT - client address for CORS
 */
function generateDevEnvs() {
  const CONFIG = {
    HOST: "localhost",
    PORT: "4000",
    DEV: "true",
    CORS_CLIENT: "http://localhost:3000",
  } as const;

  const toWrite = Object.entries(CONFIG).reduce(
    (acc, [key, value]) => acc.concat(`${key}=${value}\n`),
    "\n"
  );

  fs.appendFile(".env", toWrite, (err) => {
    if (err) {
      console.error("Error writing to .env file:", err);
    } else {
      console.log(
        `Dev env variables(${Object.keys(CONFIG).join(
          ", "
        )}) created successfully`
      );
    }
  });
}
generateDevEnvs();
