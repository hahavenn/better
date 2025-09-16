import * as fs from "node:fs";
import * as crypto from "node:crypto";

const SECRET_LENGTH = 64;

const secret = crypto
  .randomBytes(SECRET_LENGTH)
  .toString("hex")
  .slice(0, SECRET_LENGTH);

const toWrite = `\nJWT_SECRET=${secret}\n`;

fs.appendFile(".env", toWrite, (err) => {
  if (err) {
    console.error("Error writing to .env file:", err);
  } else {
    console.log("JWT_SECRET created successfully");
  }
});
