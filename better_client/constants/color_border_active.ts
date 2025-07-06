import type { ColorPalettes } from "~/types/color_palettes";

type ColorBorderActive = {
  [key in ColorPalettes]: {
    LIGHT: string;
    DARK: string;
  };
};

/** Border active tailwind classes */
const COLOR_BORDER_ACTIVE: ColorBorderActive = {
  RED: {
    LIGHT: "--plt-red-border-l-active",
    DARK: "--plt-red-border-d-active",
  },
  ORANGE: {
    LIGHT: "--plt-orange-border-l-active",
    DARK: "--plt-orange-border-d-active",
  },
  AMBER: {
    LIGHT: "--plt-amber-border-l-active",
    DARK: "--plt-amber-border-d-active",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-border-l-active",
    DARK: "--plt-yellow-border-d-active",
  },
  LIME: {
    LIGHT: "--plt-lime-border-l-active",
    DARK: "--plt-lime-border-d-active",
  },
  GREEN: {
    LIGHT: "--plt-green-border-l-active",
    DARK: "--plt-green-border-d-active",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-border-l-active",
    DARK: "--plt-emerald-border-d-active",
  },
  TEAL: {
    LIGHT: "--plt-teal-border-l-active",
    DARK: "--plt-teal-border-d-active",
  },
  CYAN: {
    LIGHT: "--plt-cyan-border-l-active",
    DARK: "--plt-cyan-border-d-active",
  },
  SKY: {
    LIGHT: "--plt-sky-border-l-active",
    DARK: "--plt-sky-border-d-active",
  },
  BLUE: {
    LIGHT: "--plt-blue-border-l-active",
    DARK: "--plt-blue-border-d-active",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-border-l-active",
    DARK: "--plt-indigo-border-d-active",
  },
  VIOLET: {
    LIGHT: "--plt-violet-border-l-active",
    DARK: "--plt-violet-border-d-active",
  },
  PURPLE: {
    LIGHT: "--plt-purple-border-l-active",
    DARK: "--plt-purple-border-d-active",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-border-l-active",
    DARK: "--plt-fuchsia-border-d-active",
  },
  PINK: {
    LIGHT: "--plt-pink-border-l-active",
    DARK: "--plt-pink-border-d-active",
  },
  ROSE: {
    LIGHT: "--plt-rose-border-l-active",
    DARK: "--plt-rose-border-d-active",
  },
  SLATE: {
    LIGHT: "--plt-slate-border-l-active",
    DARK: "--plt-slate-border-d-active",
  },
  GRAY: {
    LIGHT: "--plt-gray-border-l-active",
    DARK: "--plt-gray-border-d-active",
  },
  ZINC: {
    LIGHT: "--plt-zinc-border-l-active",
    DARK: "--plt-zinc-border-d-active",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-border-l-active",
    DARK: "--plt-neutral-border-d-active",
  },
  STONE: {
    LIGHT: "--plt-stone-border-l-active",
    DARK: "--plt-stone-border-d-active",
  },
} as const;
export default COLOR_BORDER_ACTIVE;
