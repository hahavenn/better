import type { ColorPalettes } from "~/types/color_palettes";

type ColorBgStyles = {
  [key in ColorPalettes]: {
    LIGHT: string;
    DARK: string;
  };
};
/** Bg active tailwind classes */
export const COLOR_BG_ACTIVE: ColorBgStyles = {
  RED: {
    LIGHT: "--plt-red-bg-l-active",
    DARK: "--plt-red-bg-d-active",
  },
  ORANGE: {
    LIGHT: "--plt-orange-bg-l-active",
    DARK: "--plt-orange-bg-d-active",
  },
  AMBER: {
    LIGHT: "--plt-amber-bg-l-active",
    DARK: "--plt-amber-bg-d-active",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-bg-l-active",
    DARK: "--plt-yellow-bg-d-active",
  },
  LIME: {
    LIGHT: "--plt-lime-bg-l-active",
    DARK: "--plt-lime-bg-d-active",
  },
  GREEN: {
    LIGHT: "--plt-green-bg-l-active",
    DARK: "--plt-green-bg-d-active",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-bg-l-active",
    DARK: "--plt-emerald-bg-d-active",
  },
  TEAL: {
    LIGHT: "--plt-teal-bg-l-active",
    DARK: "--plt-teal-bg-d-active",
  },
  CYAN: {
    LIGHT: "--plt-cyan-bg-l-active",
    DARK: "--plt-cyan-bg-d-active",
  },
  SKY: {
    LIGHT: "--plt-sky-bg-l-active",
    DARK: "--plt-sky-bg-d-active",
  },
  BLUE: {
    LIGHT: "--plt-blue-bg-l-active",
    DARK: "--plt-blue-bg-d-active",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-bg-l-active",
    DARK: "--plt-indigo-bg-d-active",
  },
  VIOLET: {
    LIGHT: "--plt-violet-bg-l-active",
    DARK: "--plt-violet-bg-d-active",
  },
  PURPLE: {
    LIGHT: "--plt-purple-bg-l-active",
    DARK: "--plt-purple-bg-d-active",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-bg-l-active",
    DARK: "--plt-fuchsia-bg-d-active",
  },
  PINK: {
    LIGHT: "--plt-pink-bg-l-active",
    DARK: "--plt-pink-bg-d-active",
  },
  ROSE: {
    LIGHT: "--plt-rose-bg-l-active",
    DARK: "--plt-rose-bg-d-active",
  },
  SLATE: {
    LIGHT: "--plt-slate-bg-l-active",
    DARK: "--plt-slate-bg-d-active",
  },
  GRAY: {
    LIGHT: "--plt-gray-bg-l-active",
    DARK: "--plt-gray-bg-d-active",
  },
  ZINC: {
    LIGHT: "--plt-zinc-bg-l-active",
    DARK: "--plt-zinc-bg-d-active",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-bg-l-active",
    DARK: "--plt-neutral-bg-d-active",
  },
  STONE: {
    LIGHT: "--plt-stone-bg-l-active",
    DARK: "--plt-stone-bg-d-active",
  },
} as const;

/** Border default tailwind classes */
export const COLOR_BORDER_DEFAULT: ColorBgStyles = {
  RED: {
    LIGHT: "--plt-red-bg-l-default",
    DARK: "--plt-red-bg-d-default",
  },
  ORANGE: {
    LIGHT: "--plt-orange-bg-l-default",
    DARK: "--plt-orange-bg-d-default",
  },
  AMBER: {
    LIGHT: "--plt-amber-bg-l-default",
    DARK: "--plt-amber-bg-d-default",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-bg-l-default",
    DARK: "--plt-yellow-bg-d-default",
  },
  LIME: {
    LIGHT: "--plt-lime-bg-l-default",
    DARK: "--plt-lime-bg-d-default",
  },
  GREEN: {
    LIGHT: "--plt-green-bg-l-default",
    DARK: "--plt-green-bg-d-default",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-bg-l-default",
    DARK: "--plt-emerald-bg-d-default",
  },
  TEAL: {
    LIGHT: "--plt-teal-bg-l-default",
    DARK: "--plt-teal-bg-d-default",
  },
  CYAN: {
    LIGHT: "--plt-cyan-bg-l-default",
    DARK: "--plt-cyan-bg-d-default",
  },
  SKY: {
    LIGHT: "--plt-sky-bg-l-default",
    DARK: "--plt-sky-bg-d-default",
  },
  BLUE: {
    LIGHT: "--plt-blue-bg-l-default",
    DARK: "--plt-blue-bg-d-default",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-bg-l-default",
    DARK: "--plt-indigo-bg-d-default",
  },
  VIOLET: {
    LIGHT: "--plt-violet-bg-l-default",
    DARK: "--plt-violet-bg-d-default",
  },
  PURPLE: {
    LIGHT: "--plt-purple-bg-l-default",
    DARK: "--plt-purple-bg-d-default",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-bg-l-default",
    DARK: "--plt-fuchsia-bg-d-default",
  },
  PINK: {
    LIGHT: "--plt-pink-bg-l-default",
    DARK: "--plt-pink-bg-d-default",
  },
  ROSE: {
    LIGHT: "--plt-rose-bg-l-default",
    DARK: "--plt-rose-bg-d-default",
  },
  SLATE: {
    LIGHT: "--plt-slate-bg-l-default",
    DARK: "--plt-slate-bg-d-default",
  },
  GRAY: {
    LIGHT: "--plt-gray-bg-l-default",
    DARK: "--plt-gray-bg-d-default",
  },
  ZINC: {
    LIGHT: "--plt-zinc-bg-l-default",
    DARK: "--plt-zinc-bg-d-default",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-bg-l-default",
    DARK: "--plt-neutral-bg-d-default",
  },
  STONE: {
    LIGHT: "--plt-stone-bg-l-default",
    DARK: "--plt-stone-bg-d-default",
  },
} as const;

/** Border active tailwind classes */
export const COLOR_BORDER_ACTIVE: ColorBgStyles = {
  RED: {
    LIGHT: "--plt-red-bg-l-active",
    DARK: "--plt-red-bg-d-active",
  },
  ORANGE: {
    LIGHT: "--plt-orange-bg-l-active",
    DARK: "--plt-orange-bg-d-active",
  },
  AMBER: {
    LIGHT: "--plt-amber-bg-l-active",
    DARK: "--plt-amber-bg-d-active",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-bg-l-active",
    DARK: "--plt-yellow-bg-d-active",
  },
  LIME: {
    LIGHT: "--plt-lime-bg-l-active",
    DARK: "--plt-lime-bg-d-active",
  },
  GREEN: {
    LIGHT: "--plt-green-bg-l-active",
    DARK: "--plt-green-bg-d-active",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-bg-l-active",
    DARK: "--plt-emerald-bg-d-active",
  },
  TEAL: {
    LIGHT: "--plt-teal-bg-l-active",
    DARK: "--plt-teal-bg-d-active",
  },
  CYAN: {
    LIGHT: "--plt-cyan-bg-l-active",
    DARK: "--plt-cyan-bg-d-active",
  },
  SKY: {
    LIGHT: "--plt-sky-bg-l-active",
    DARK: "--plt-sky-bg-d-active",
  },
  BLUE: {
    LIGHT: "--plt-blue-bg-l-active",
    DARK: "--plt-blue-bg-d-active",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-bg-l-active",
    DARK: "--plt-indigo-bg-d-active",
  },
  VIOLET: {
    LIGHT: "--plt-violet-bg-l-active",
    DARK: "--plt-violet-bg-d-active",
  },
  PURPLE: {
    LIGHT: "--plt-purple-bg-l-active",
    DARK: "--plt-purple-bg-d-active",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-bg-l-active",
    DARK: "--plt-fuchsia-bg-d-active",
  },
  PINK: {
    LIGHT: "--plt-pink-bg-l-active",
    DARK: "--plt-pink-bg-d-active",
  },
  ROSE: {
    LIGHT: "--plt-rose-bg-l-active",
    DARK: "--plt-rose-bg-d-active",
  },
  SLATE: {
    LIGHT: "--plt-slate-bg-l-active",
    DARK: "--plt-slate-bg-d-active",
  },
  GRAY: {
    LIGHT: "--plt-gray-bg-l-active",
    DARK: "--plt-gray-bg-d-active",
  },
  ZINC: {
    LIGHT: "--plt-zinc-bg-l-active",
    DARK: "--plt-zinc-bg-d-active",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-bg-l-active",
    DARK: "--plt-neutral-bg-d-active",
  },
  STONE: {
    LIGHT: "--plt-stone-bg-l-active",
    DARK: "--plt-stone-bg-d-active",
  },
} as const;
