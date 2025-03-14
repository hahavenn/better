/**
 * This plugin is used to set user theme
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    const themePreference = localStorage.getItem("themePreference");
    const htmlElement = document.getElementsByTagName("html")[0];

    if (themePreference) {
      htmlElement.classList.add(themePreference);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      htmlElement.classList.add("dark");
      localStorage.setItem("themePreference", "dark");
    } else {
      localStorage.setItem("themePreference", "light");
    }
  });
});
