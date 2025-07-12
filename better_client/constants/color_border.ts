import type { ColorPalettes } from "~/types/color_palettes";

type ColorBorderStyles = {
  [key in ColorPalettes]: {
    LIGHT: string;
    DARK: string;
  };
};
/** Border hover tailwind classes */
export const COLOR_BORDER_HOVER: ColorBorderStyles = {
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

/** Border default tailwind classes */
export const COLOR_BORDER_DEFAULT: ColorBorderStyles = {
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

/** Border active tailwind classes */
export const COLOR_BORDER_ACTIVE: ColorBorderStyles = {
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
