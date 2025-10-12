export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  imports: {
    scan: false,
  },

  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "favicon_light.ico",
        },
      ],
      title: "Better",

      bodyAttrs: {
        class: "text_plain",
      },
    },
    rootAttrs: {
      id: "__better",
    },
  },

  devServer: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT ?? "3000"),
  },

  css: ["~/assets/css/main.css", "~/assets/css/colors/index.css"],

  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@nuxtjs/tailwindcss"],

  nitro: {
    routeRules: {
      "/api/v1/**": {
        cors: true,
      },
    },

    typescript: {
      tsConfig: {
        compilerOptions: {
          noEmit: false,
          composite: true,
        },
        include: ["../shared/**/*.ts"],
      },
    },
  },

  typescript: {
    sharedTsConfig: {
      compilerOptions: {
        noEmit: false,
        composite: true,
      },
      include: ["../shared/**/*.ts"],
    },
    nodeTsConfig: {
      compilerOptions: {
        noEmit: false,
        composite: true,
      },
      include: ["../shared/**/*.ts"],
    },
    tsConfig: {
      compilerOptions: {
        noEmit: false,
        composite: true,
      },
      include: ["../shared/**/*.ts"],
    },
  },
});
