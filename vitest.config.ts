import { defineConfig } from "vitest/config";
import { defineVitestProject } from "@nuxt/test-utils/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["tests/{e2e,unit}/*.{test,spec}.ts"],
          environment: "node",
        },
      },
      await defineVitestProject({
        test: {
          name: "nuxt",
          include: ["tests/nuxt/*.{test,spec}.ts"],
          environment: "nuxt",
        },
      }),
      {
        test: {
          name: "api",
          include: ["tests/api/**/*.{test,spec}.ts"],
          environment: "node",
          globalSetup: ["./tests/globalSetup"],
        },
      },
    ],
    env: {
      /**
       * Named like this because `process.env` has existing variable for `BASE_URL`
       */
      SERVER_BASE_URL: "http://localhost:3000",

      /**
       * Some jwt secret (similar as in `.env.example`)
       */
      JWT_SECRET: "SOME_GENERATED_SECRET",
    },
  },
});
