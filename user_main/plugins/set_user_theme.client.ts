// todo - re-do with nuxt module for theme (https://nuxt.com/modules/color-mode)
/**
 * This plugin is used to set user theme
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    document
      .getElementsByTagName("html")[0]
      .classList.add(
        window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark"
      );
  });
});
