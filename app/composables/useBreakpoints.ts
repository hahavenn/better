import getDocumentFontSize from "../utils/getDocumentFontSize";

/** @description breakpoints in rem */
const breakpoints = {
  /** 0px */
  xs: 0,
  /** 640px */
  sm: 40,
  /** 768px */
  md: 48,
  /** 1024px */
  lg: 64,
  /** 1280px */
  xl: 80,
  /** 1536px */
  "2xl": 96,
} as const;

const { width } = useWindowSize();

const active = computed(
  () =>
    Object.entries(breakpoints)
      .toReversed()
      .find(
        (b) => width.value >= b[1] * getDocumentFontSize()
      )?.[0] as keyof typeof breakpoints
);
const activePx = computed(
  () =>
    breakpoints[
      Object.entries(breakpoints)
        .toReversed()
        .find(
          (b) => width.value >= b[1] * getDocumentFontSize()
        )?.[0] as keyof typeof breakpoints
    ] * getDocumentFontSize()
);

export default function () {
  return {
    /** Current width of window */
    width,

    /** Breakpoint used in project */
    breakpoints,

    /** Active breakpoint (minimal) */
    active,

    /** Active breakpoint (minimal) in `px`*/
    activePx,
  };
}
