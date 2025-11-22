import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "server/db/schema/_.ts",

  dbCredentials: {
    url: "file:dev.db",
  },

  strict: true,
  verbose: true,
});
