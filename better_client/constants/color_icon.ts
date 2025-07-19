import type { ColorPalettes } from "~/types/color_palettes";

type ColorIconStyles = {
  [key in ColorPalettes]: {
    LIGHT: string;
    DARK: string;
  };
};

/** Icon default tailwind classes */
export const COLOR_ICON_DEFAULT: ColorIconStyles = {
  RED: {
    LIGHT: "--plt-red-icon-l-default",
    DARK: "--plt-red-icon-d-default",
  },
  ORANGE: {
    LIGHT: "--plt-orange-icon-l-default",
    DARK: "--plt-orange-icon-d-default",
  },
  AMBER: {
    LIGHT: "--plt-amber-icon-l-default",
    DARK: "--plt-amber-icon-d-default",
  },
  YELLOW: {
    LIGHT: "--plt-yellow-icon-l-default",
    DARK: "--plt-yellow-icon-d-default",
  },
  LIME: {
    LIGHT: "--plt-lime-icon-l-default",
    DARK: "--plt-lime-icon-d-default",
  },
  GREEN: {
    LIGHT: "--plt-green-icon-l-default",
    DARK: "--plt-green-icon-d-default",
  },
  EMERALD: {
    LIGHT: "--plt-emerald-icon-l-default",
    DARK: "--plt-emerald-icon-d-default",
  },
  TEAL: {
    LIGHT: "--plt-teal-icon-l-default",
    DARK: "--plt-teal-icon-d-default",
  },
  CYAN: {
    LIGHT: "--plt-cyan-icon-l-default",
    DARK: "--plt-cyan-icon-d-default",
  },
  SKY: {
    LIGHT: "--plt-sky-icon-l-default",
    DARK: "--plt-sky-icon-d-default",
  },
  BLUE: {
    LIGHT: "--plt-blue-icon-l-default",
    DARK: "--plt-blue-icon-d-default",
  },
  INDIGO: {
    LIGHT: "--plt-indigo-icon-l-default",
    DARK: "--plt-indigo-icon-d-default",
  },
  VIOLET: {
    LIGHT: "--plt-violet-icon-l-default",
    DARK: "--plt-violet-icon-d-default",
  },
  PURPLE: {
    LIGHT: "--plt-purple-icon-l-default",
    DARK: "--plt-purple-icon-d-default",
  },
  FUCHSIA: {
    LIGHT: "--plt-fuchsia-icon-l-default",
    DARK: "--plt-fuchsia-icon-d-default",
  },
  PINK: {
    LIGHT: "--plt-pink-icon-l-default",
    DARK: "--plt-pink-icon-d-default",
  },
  ROSE: {
    LIGHT: "--plt-rose-icon-l-default",
    DARK: "--plt-rose-icon-d-default",
  },
  SLATE: {
    LIGHT: "--plt-slate-icon-l-default",
    DARK: "--plt-slate-icon-d-default",
  },
  GRAY: {
    LIGHT: "--plt-gray-icon-l-default",
    DARK: "--plt-gray-icon-d-default",
  },
  ZINC: {
    LIGHT: "--plt-zinc-icon-l-default",
    DARK: "--plt-zinc-icon-d-default",
  },
  NEUTRAL: {
    LIGHT: "--plt-neutral-icon-l-default",
    DARK: "--plt-neutral-icon-d-default",
  },
  STONE: {
    LIGHT: "--plt-stone-icon-l-default",
    DARK: "--plt-stone-icon-d-default",
  },
} as const;
