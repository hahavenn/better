import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "server/db/schema",

  dbCredentials: {
    url: "file:dev.db",
  },

  strict: true,
  verbose: true,
});
