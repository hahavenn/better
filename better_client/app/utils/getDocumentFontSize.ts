/** Return document font-size in pixels */
export default function () {
  return parseInt(
    getComputedStyle(document.documentElement).fontSize.replaceAll(
      /[^0-9]/g,
      ""
    )
  );
}
