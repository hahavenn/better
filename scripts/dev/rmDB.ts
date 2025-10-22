import { rm } from "node:fs/promises";
import path from "node:path";

const currentPath = path.resolve(".");
console.log("currentPath", currentPath);

const dbToRemovePath = path.resolve(currentPath, "server", "db", "main.db");

async function rmDB() {
  rm(dbToRemovePath).catch(() => console.log("no file"));
}
rmDB();
