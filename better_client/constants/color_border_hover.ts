import type { ColorPalettes } from "~/types/color_palettes";

type Theme = {
  /** Tailwind class */
  CLASS: string;
  VARIABLE: string;
};
type ColorBorderHover = {
  [key in ColorPalettes]: {
    LIGHT: string;
    DARK: string;
  };
};

/** Border hover tailwind classes */
const COLOR_BORDER_HOVER: ColorBorderHover = {
  RED: {
    LIGHT: "--plt-red-border-l-hover",
    DARK: "--plt-red-border-d-hover",
  },
  ORANGE: {
    LIGHT: "--plt-orange-border-l-hover",
    DARK: "--plt-orange-border-d-hover",
  },
  AMBER: {
    LIGHT: "--plt-amber-border-l-hover",
    DARK: "--plt-amber-border-d-hover",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-border-l-hover",
    DARK: "--plt-yellow-border-d-hover",
  },
  LIME: {
    LIGHT: "--plt-lime-border-l-hover",
    DARK: "--plt-lime-border-d-hover",
  },
  GREEN: {
    LIGHT: "--plt-green-border-l-hover",
    DARK: "--plt-green-border-d-hover",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-border-l-hover",
    DARK: "--plt-emerald-border-d-hover",
  },
  TEAL: {
    LIGHT: "--plt-teal-border-l-hover",
    DARK: "--plt-teal-border-d-hover",
  },
  CYAN: {
    LIGHT: "--plt-cyan-border-l-hover",
    DARK: "--plt-cyan-border-d-hover",
  },
  SKY: {
    LIGHT: "--plt-sky-border-l-hover",
    DARK: "--plt-sky-border-d-hover",
  },
  BLUE: {
    LIGHT: "--plt-blue-border-l-hover",
    DARK: "--plt-blue-border-d-hover",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-border-l-hover",
    DARK: "--plt-indigo-border-d-hover",
  },
  VIOLET: {
    LIGHT: "--plt-violet-border-l-hover",
    DARK: "--plt-violet-border-d-hover",
  },
  PURPLE: {
    LIGHT: "--plt-purple-border-l-hover",
    DARK: "--plt-purple-border-d-hover",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-border-l-hover",
    DARK: "--plt-fuchsia-border-d-hover",
  },
  PINK: {
    LIGHT: "--plt-pink-border-l-hover",
    DARK: "--plt-pink-border-d-hover",
  },
  ROSE: {
    LIGHT: "--plt-rose-border-l-hover",
    DARK: "--plt-rose-border-d-hover",
  },
  SLATE: {
    LIGHT: "--plt-slate-border-l-hover",
    DARK: "--plt-slate-border-d-hover",
  },
  GRAY: {
    LIGHT: "--plt-gray-border-l-hover",
    DARK: "--plt-gray-border-d-hover",
  },
  ZINC: {
    LIGHT: "--plt-zinc-border-l-hover",
    DARK: "--plt-zinc-border-d-hover",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-border-l-hover",
    DARK: "--plt-neutral-border-d-hover",
  },
  STONE: {
    LIGHT: "--plt-stone-border-l-hover",
    DARK: "--plt-stone-border-d-hover",
  },
} as const;
export default COLOR_BORDER_HOVER;
