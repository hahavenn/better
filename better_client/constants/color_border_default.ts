import type { ColorPalettes } from "~/types/color_palettes";

type Theme = {
  /** Tailwind class */
  CLASS: string;
  VARIABLE: string;
};
type ColorBorderDefault = {
  [key in ColorPalettes]: {
    LIGHT: string;
    DARK: string;
  };
};

/** Border default tailwind classes */
const COLOR_BORDER_DEFAULT: ColorBorderDefault = {
  RED: {
    LIGHT: "--plt-red-border-l-default",
    DARK: "--plt-red-border-d-default",
  },
  ORANGE: {
    LIGHT: "--plt-orange-border-l-default",
    DARK: "--plt-orange-border-d-default",
  },
  AMBER: {
    LIGHT: "--plt-amber-border-l-default",
    DARK: "--plt-amber-border-d-default",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-border-l-default",
    DARK: "--plt-yellow-border-d-default",
  },
  LIME: {
    LIGHT: "--plt-lime-border-l-default",
    DARK: "--plt-lime-border-d-default",
  },
  GREEN: {
    LIGHT: "--plt-green-border-l-default",
    DARK: "--plt-green-border-d-default",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-border-l-default",
    DARK: "--plt-emerald-border-d-default",
  },
  TEAL: {
    LIGHT: "--plt-teal-border-l-default",
    DARK: "--plt-teal-border-d-default",
  },
  CYAN: {
    LIGHT: "--plt-cyan-border-l-default",
    DARK: "--plt-cyan-border-d-default",
  },
  SKY: {
    LIGHT: "--plt-sky-border-l-default",
    DARK: "--plt-sky-border-d-default",
  },
  BLUE: {
    LIGHT: "--plt-blue-border-l-default",
    DARK: "--plt-blue-border-d-default",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-border-l-default",
    DARK: "--plt-indigo-border-d-default",
  },
  VIOLET: {
    LIGHT: "--plt-violet-border-l-default",
    DARK: "--plt-violet-border-d-default",
  },
  PURPLE: {
    LIGHT: "--plt-purple-border-l-default",
    DARK: "--plt-purple-border-d-default",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-border-l-default",
    DARK: "--plt-fuchsia-border-d-default",
  },
  PINK: {
    LIGHT: "--plt-pink-border-l-default",
    DARK: "--plt-pink-border-d-default",
  },
  ROSE: {
    LIGHT: "--plt-rose-border-l-default",
    DARK: "--plt-rose-border-d-default",
  },
  SLATE: {
    LIGHT: "--plt-slate-border-l-default",
    DARK: "--plt-slate-border-d-default",
  },
  GRAY: {
    LIGHT: "--plt-gray-border-l-default",
    DARK: "--plt-gray-border-d-default",
  },
  ZINC: {
    LIGHT: "--plt-zinc-border-l-default",
    DARK: "--plt-zinc-border-d-default",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-border-l-default",
    DARK: "--plt-neutral-border-d-default",
  },
  STONE: {
    LIGHT: "--plt-stone-border-l-default",
    DARK: "--plt-stone-border-d-default",
  },
} as const;
export default COLOR_BORDER_DEFAULT;
