import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

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
    host: "localhost",
    port: 3000,
  },

  css: [
    "~/assets/css/main.css",
    "~/assets/css/colors/index.css",
    "~/assets/css/text/index.css",
  ],

  modules: ["@vueuse/nuxt", "@pinia/nuxt"],

  vite: {
    plugins: [tailwindcss()],
  },
});
