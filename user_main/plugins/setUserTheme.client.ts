/**
 * This plugin is used to set user theme
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    const htmlElement = document.getElementsByTagName("html")[0];

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      htmlElement.classList.add("dark");
    }

    // #todo: remove. for dev purposes only
    Object.defineProperty(window, "toggleTheme", {
      value: function () {
        if (htmlElement.classList.contains("dark")) {
          htmlElement.classList.remove("dark");
        } else {
          htmlElement.classList.add("dark");
        }
      },
    });
  });
});
