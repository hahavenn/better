export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

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
    },
    rootAttrs: {
      id: "__ha_edu",
    },
  },

  devServer: {
    host: "localhost",
    port: 3000,
  },

  css: ["~/assets/css/index.css"],
  modules: ["@vueuse/nuxt"],
});
