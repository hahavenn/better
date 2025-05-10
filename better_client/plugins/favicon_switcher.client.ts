export default defineNuxtPlugin(() => {
  const colorMode = useColorMode();

  const updateFavicon = (mode: string) => {
    const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (link) {
      link.href = mode === "dark" ? "/favicon_dark.ico" : "/favicon_light.ico";
    }
  };

  updateFavicon(colorMode.value);

  watch(
    () => colorMode.value,
    (newColorMode) => {
      updateFavicon(newColorMode);
    }
  );
});
