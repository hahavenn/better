import * as fs from "fs";

const CONFIG = {
  HOST: "localhost",
  PORT: "4000",
  DEV: "true",
  CORS_CLIENT: "http://localhost:3000",
};

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
