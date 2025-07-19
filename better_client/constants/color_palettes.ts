import type { ColorPalettes } from "~/types/color_palettes";

import { COLOR_BORDER_ACTIVE } from "./color_border";
import { COLOR_BG_ACTIVE } from "./color_bg";
import { COLOR_ICON_DEFAULT } from "./color_icon";

type ColorPaletteStyles = {
  BORDER: {
    DEFAULT: string;
    HOVER: string;
    ACTIVE: string;
    FOCUS: string;
  };
  ICON: {
    DEFAULT: string;
    HOVER: string;
    ACTIVE: string;
    FOCUS: string;
  };
  BG: {
    DEFAULT: string;
    HOVER: string;
    ACTIVE: string;
    FOCUS: string;
  };
  TEXT: {
    DEFAULT: string;
    HOVER: string;
    ACTIVE: string;
    FOCUS: string;
  };
};

/**
 * All color palettes, that used in project.
 * @see https://tailwindcss.com/docs/colors
 */
const COLOR_PALETTES_STYLES: { [key in ColorPalettes]: ColorPaletteStyles } = {
  RED: {
    BORDER: {
      DEFAULT: `border-(--plt-red-border-l-default) dark:border-(--plt-red-border-d-default)`,
      HOVER: `hover:border-(--plt-red-border-l-hover) dark:hover:border-(--plt-red-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.RED.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.RED.DARK})`,
      FOCUS: `focus:border-(--plt-red-border-l-focus) dark:focus:border-(--plt-red-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.RED.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.RED.DARK})`,
      HOVER: `hover:fill-(--plt-red-icon-l-hover) dark:hover:fill-(--plt-red-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-red-icon-l-active) dark:active:fill-(--plt-red-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-red-icon-l-focus) dark:focus:fill-(--plt-red-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-red-bg-l-default) dark:bg-(--plt-red-bg-d-default)`,
      HOVER: `hover:bg-(--plt-red-bg-l-hover) dark:hover:bg-(--plt-red-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.RED.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.RED.DARK})`,
      FOCUS: `focus:bg-(--plt-red-bg-l-focus) dark:focus:bg-(--plt-red-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-red-text-l-default) dark:text-(--plt-red-text-d-default)`,
      HOVER: `hover:text-(--plt-red-text-l-hover) dark:hover:text-(--plt-red-text-d-hover)`,
      ACTIVE: `active:text-(--plt-red-text-l-active) dark:active:text-(--plt-red-text-d-active)`,
      FOCUS: `focus:text-(--plt-red-text-l-focus) dark:focus:text-(--plt-red-text-d-focus)`,
    },
  },
  ORANGE: {
    BORDER: {
      DEFAULT: `border-(--plt-orange-border-l-default) dark:border-(--plt-orange-border-d-default)`,
      HOVER: `hover:border-(--plt-orange-border-l-hover) dark:hover:border-(--plt-orange-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.ORANGE.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.ORANGE.DARK})`,
      FOCUS: `focus:border-(--plt-orange-border-l-focus) dark:focus:border-(--plt-orange-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.ORANGE.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.ORANGE.DARK})`,
      HOVER: `hover:fill-(--plt-orange-icon-l-hover) dark:hover:fill-(--plt-orange-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-orange-icon-l-active) dark:active:fill-(--plt-orange-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-orange-icon-l-focus) dark:focus:fill-(--plt-orange-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-orange-bg-l-default) dark:bg-(--plt-orange-bg-d-default)`,
      HOVER: `hover:bg-(--plt-orange-bg-l-hover) dark:hover:bg-(--plt-orange-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.ORANGE.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.ORANGE.DARK})`,
      FOCUS: `focus:bg-(--plt-orange-bg-l-focus) dark:focus:bg-(--plt-orange-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-orange-text-l-default) dark:text-(--plt-orange-text-d-default)`,
      HOVER: `hover:text-(--plt-orange-text-l-hover) dark:hover:text-(--plt-orange-text-d-hover)`,
      ACTIVE: `active:text-(--plt-orange-text-l-active) dark:active:text-(--plt-orange-text-d-active)`,
      FOCUS: `focus:text-(--plt-orange-text-l-focus) dark:focus:text-(--plt-orange-text-d-focus)`,
    },
  },
  AMBER: {
    BORDER: {
      DEFAULT: `border-(--plt-amber-border-l-default) dark:border-(--plt-amber-border-d-default)`,
      HOVER: `hover:border-(--plt-amber-border-l-hover) dark:hover:border-(--plt-amber-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.AMBER.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.AMBER.DARK})`,
      FOCUS: `focus:border-(--plt-amber-border-l-focus) dark:focus:border-(--plt-amber-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.AMBER.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.AMBER.DARK})`,
      HOVER: `hover:fill-(--plt-amber-icon-l-hover) dark:hover:fill-(--plt-amber-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-amber-icon-l-active) dark:active:fill-(--plt-amber-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-amber-icon-l-focus) dark:focus:fill-(--plt-amber-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-amber-bg-l-default) dark:bg-(--plt-amber-bg-d-default)`,
      HOVER: `hover:bg-(--plt-amber-bg-l-hover) dark:hover:bg-(--plt-amber-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.AMBER.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.AMBER.DARK})`,
      FOCUS: `focus:bg-(--plt-amber-bg-l-focus) dark:focus:bg-(--plt-amber-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-amber-text-l-default) dark:text-(--plt-amber-text-d-default)`,
      HOVER: `hover:text-(--plt-amber-text-l-hover) dark:hover:text-(--plt-amber-text-d-hover)`,
      ACTIVE: `active:text-(--plt-amber-text-l-active) dark:active:text-(--plt-amber-text-d-active)`,
      FOCUS: `focus:text-(--plt-amber-text-l-focus) dark:focus:text-(--plt-amber-text-d-focus)`,
    },
  },
  YELLOW: {
    BORDER: {
      DEFAULT: `border-(--plt-yellow-border-l-default) dark:border-(--plt-yellow-border-d-default)`,
      HOVER: `hover:border-(--plt-yellow-border-l-hover) dark:hover:border-(--plt-yellow-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.YELLOW.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.YELLOW.DARK})`,
      FOCUS: `focus:border-(--plt-yellow-border-l-focus) dark:focus:border-(--plt-yellow-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.YELLOW.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.YELLOW.DARK})`,
      HOVER: `hover:fill-(--plt-yellow-icon-l-hover) dark:hover:fill-(--plt-yellow-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-yellow-icon-l-active) dark:active:fill-(--plt-yellow-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-yellow-icon-l-focus) dark:focus:fill-(--plt-yellow-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-yellow-bg-l-default) dark:bg-(--plt-yellow-bg-d-default)`,
      HOVER: `hover:bg-(--plt-yellow-bg-l-hover) dark:hover:bg-(--plt-yellow-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.YELLOW.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.YELLOW.DARK})`,
      FOCUS: `focus:bg-(--plt-yellow-bg-l-focus) dark:focus:bg-(--plt-yellow-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-yellow-text-l-default) dark:text-(--plt-yellow-text-d-default)`,
      HOVER: `hover:text-(--plt-yellow-text-l-hover) dark:hover:text-(--plt-yellow-text-d-hover)`,
      ACTIVE: `active:text-(--plt-yellow-text-l-active) dark:active:text-(--plt-yellow-text-d-active)`,
      FOCUS: `focus:text-(--plt-yellow-text-l-focus) dark:focus:text-(--plt-yellow-text-d-focus)`,
    },
  },
  LIME: {
    BORDER: {
      DEFAULT: `border-(--plt-lime-border-l-default) dark:border-(--plt-lime-border-d-default)`,
      HOVER: `hover:border-(--plt-lime-border-l-hover) dark:hover:border-(--plt-lime-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.LIME.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.LIME.DARK})`,
      FOCUS: `focus:border-(--plt-lime-border-l-focus) dark:focus:border-(--plt-lime-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.LIME.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.LIME.DARK})`,
      HOVER: `hover:fill-(--plt-lime-icon-l-hover) dark:hover:fill-(--plt-lime-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-lime-icon-l-active) dark:active:fill-(--plt-lime-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-lime-icon-l-focus) dark:focus:fill-(--plt-lime-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-lime-bg-l-default) dark:bg-(--plt-lime-bg-d-default)`,
      HOVER: `hover:bg-(--plt-lime-bg-l-hover) dark:hover:bg-(--plt-lime-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.LIME.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.LIME.DARK})`,
      FOCUS: `focus:bg-(--plt-lime-bg-l-focus) dark:focus:bg-(--plt-lime-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-lime-text-l-default) dark:text-(--plt-lime-text-d-default)`,
      HOVER: `hover:text-(--plt-lime-text-l-hover) dark:hover:text-(--plt-lime-text-d-hover)`,
      ACTIVE: `active:text-(--plt-lime-text-l-active) dark:active:text-(--plt-lime-text-d-active)`,
      FOCUS: `focus:text-(--plt-lime-text-l-focus) dark:focus:text-(--plt-lime-text-d-focus)`,
    },
  },
  GREEN: {
    BORDER: {
      DEFAULT: `border-(--plt-green-border-l-default) dark:border-(--plt-green-border-d-default)`,
      HOVER: `hover:border-(--plt-green-border-l-hover) dark:hover:border-(--plt-green-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.GREEN.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.GREEN.DARK})`,
      FOCUS: `focus:border-(--plt-green-border-l-focus) dark:focus:border-(--plt-green-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.GREEN.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.GREEN.DARK})`,
      HOVER: `hover:fill-(--plt-green-icon-l-hover) dark:hover:fill-(--plt-green-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-green-icon-l-active) dark:active:fill-(--plt-green-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-green-icon-l-focus) dark:focus:fill-(--plt-green-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-green-bg-l-default) dark:bg-(--plt-green-bg-d-default)`,
      HOVER: `hover:bg-(--plt-green-bg-l-hover) dark:hover:bg-(--plt-green-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.GREEN.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.GREEN.DARK})`,
      FOCUS: `focus:bg-(--plt-green-bg-l-focus) dark:focus:bg-(--plt-green-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-green-text-l-default) dark:text-(--plt-green-text-d-default)`,
      HOVER: `hover:text-(--plt-green-text-l-hover) dark:hover:text-(--plt-green-text-d-hover)`,
      ACTIVE: `active:text-(--plt-green-text-l-active) dark:active:text-(--plt-green-text-d-active)`,
      FOCUS: `focus:text-(--plt-green-text-l-focus) dark:focus:text-(--plt-green-text-d-focus)`,
    },
  },
  EMERALD: {
    BORDER: {
      DEFAULT: `border-(--plt-emerald-border-l-default) dark:border-(--plt-emerald-border-d-default)`,
      HOVER: `hover:border-(--plt-emerald-border-l-hover) dark:hover:border-(--plt-emerald-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.EMERALD.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.EMERALD.DARK})`,
      FOCUS: `focus:border-(--plt-emerald-border-l-focus) dark:focus:border-(--plt-emerald-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.EMERALD.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.EMERALD.DARK})`,
      HOVER: `hover:fill-(--plt-emerald-icon-l-hover) dark:hover:fill-(--plt-emerald-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-emerald-icon-l-active) dark:active:fill-(--plt-emerald-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-emerald-icon-l-focus) dark:focus:fill-(--plt-emerald-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-emerald-bg-l-default) dark:bg-(--plt-emerald-bg-d-default)`,
      HOVER: `hover:bg-(--plt-emerald-bg-l-hover) dark:hover:bg-(--plt-emerald-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.EMERALD.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.EMERALD.DARK})`,
      FOCUS: `focus:bg-(--plt-emerald-bg-l-focus) dark:focus:bg-(--plt-emerald-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-emerald-text-l-default) dark:text-(--plt-emerald-text-d-default)`,
      HOVER: `hover:text-(--plt-emerald-text-l-hover) dark:hover:text-(--plt-emerald-text-d-hover)`,
      ACTIVE: `active:text-(--plt-emerald-text-l-active) dark:active:text-(--plt-emerald-text-d-active)`,
      FOCUS: `focus:text-(--plt-emerald-text-l-focus) dark:focus:text-(--plt-emerald-text-d-focus)`,
    },
  },
  TEAL: {
    BORDER: {
      DEFAULT: `border-(--plt-teal-border-l-default) dark:border-(--plt-teal-border-d-default)`,
      HOVER: `hover:border-(--plt-teal-border-l-hover) dark:hover:border-(--plt-teal-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.TEAL.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.TEAL.DARK})`,
      FOCUS: `focus:border-(--plt-teal-border-l-focus) dark:focus:border-(--plt-teal-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.TEAL.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.TEAL.DARK})`,
      HOVER: `hover:fill-(--plt-teal-icon-l-hover) dark:hover:fill-(--plt-teal-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-teal-icon-l-active) dark:active:fill-(--plt-teal-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-teal-icon-l-focus) dark:focus:fill-(--plt-teal-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-teal-bg-l-default) dark:bg-(--plt-teal-bg-d-default)`,
      HOVER: `hover:bg-(--plt-teal-bg-l-hover) dark:hover:bg-(--plt-teal-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.TEAL.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.TEAL.DARK})`,
      FOCUS: `focus:bg-(--plt-teal-bg-l-focus) dark:focus:bg-(--plt-teal-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-teal-text-l-default) dark:text-(--plt-teal-text-d-default)`,
      HOVER: `hover:text-(--plt-teal-text-l-hover) dark:hover:text-(--plt-teal-text-d-hover)`,
      ACTIVE: `active:text-(--plt-teal-text-l-active) dark:active:text-(--plt-teal-text-d-active)`,
      FOCUS: `focus:text-(--plt-teal-text-l-focus) dark:focus:text-(--plt-teal-text-d-focus)`,
    },
  },
  CYAN: {
    BORDER: {
      DEFAULT: `border-(--plt-cyan-border-l-default) dark:border-(--plt-cyan-border-d-default)`,
      HOVER: `hover:border-(--plt-cyan-border-l-hover) dark:hover:border-(--plt-cyan-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.CYAN.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.CYAN.DARK})`,
      FOCUS: `focus:border-(--plt-cyan-border-l-focus) dark:focus:border-(--plt-cyan-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.CYAN.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.CYAN.DARK})`,
      HOVER: `hover:fill-(--plt-cyan-icon-l-hover) dark:hover:fill-(--plt-cyan-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-cyan-icon-l-active) dark:active:fill-(--plt-cyan-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-cyan-icon-l-focus) dark:focus:fill-(--plt-cyan-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-cyan-bg-l-default) dark:bg-(--plt-cyan-bg-d-default)`,
      HOVER: `hover:bg-(--plt-cyan-bg-l-hover) dark:hover:bg-(--plt-cyan-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.CYAN.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.CYAN.DARK})`,
      FOCUS: `focus:bg-(--plt-cyan-bg-l-focus) dark:focus:bg-(--plt-cyan-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-cyan-text-l-default) dark:text-(--plt-cyan-text-d-default)`,
      HOVER: `hover:text-(--plt-cyan-text-l-hover) dark:hover:text-(--plt-cyan-text-d-hover)`,
      ACTIVE: `active:text-(--plt-cyan-text-l-active) dark:active:text-(--plt-cyan-text-d-active)`,
      FOCUS: `focus:text-(--plt-cyan-text-l-focus) dark:focus:text-(--plt-cyan-text-d-focus)`,
    },
  },
  SKY: {
    BORDER: {
      DEFAULT: `border-(--plt-sky-border-l-default) dark:border-(--plt-sky-border-d-default)`,
      HOVER: `hover:border-(--plt-sky-border-l-hover) dark:hover:border-(--plt-sky-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.SKY.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.SKY.DARK})`,
      FOCUS: `focus:border-(--plt-sky-border-l-focus) dark:focus:border-(--plt-sky-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.SKY.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.SKY.DARK})`,
      HOVER: `hover:fill-(--plt-sky-icon-l-hover) dark:hover:fill-(--plt-sky-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-sky-icon-l-active) dark:active:fill-(--plt-sky-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-sky-icon-l-focus) dark:focus:fill-(--plt-sky-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-sky-bg-l-default) dark:bg-(--plt-sky-bg-d-default)`,
      HOVER: `hover:bg-(--plt-sky-bg-l-hover) dark:hover:bg-(--plt-sky-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.SKY.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.SKY.DARK})`,
      FOCUS: `focus:bg-(--plt-sky-bg-l-focus) dark:focus:bg-(--plt-sky-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-sky-text-l-default) dark:text-(--plt-sky-text-d-default)`,
      HOVER: `hover:text-(--plt-sky-text-l-hover) dark:hover:text-(--plt-sky-text-d-hover)`,
      ACTIVE: `active:text-(--plt-sky-text-l-active) dark:active:text-(--plt-sky-text-d-active)`,
      FOCUS: `focus:text-(--plt-sky-text-l-focus) dark:focus:text-(--plt-sky-text-d-focus)`,
    },
  },
  BLUE: {
    BORDER: {
      DEFAULT: `border-(--plt-blue-border-l-default) dark:border-(--plt-blue-border-d-default)`,
      HOVER: `hover:border-(--plt-blue-border-l-hover) dark:hover:border-(--plt-blue-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.BLUE.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.BLUE.DARK})`,
      FOCUS: `focus:border-(--plt-blue-border-l-focus) dark:focus:border-(--plt-blue-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.BLUE.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.BLUE.DARK})`,
      HOVER: `hover:fill-(--plt-blue-icon-l-hover) dark:hover:fill-(--plt-blue-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-blue-icon-l-active) dark:active:fill-(--plt-blue-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-blue-icon-l-focus) dark:focus:fill-(--plt-blue-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-blue-bg-l-default) dark:bg-(--plt-blue-bg-d-default)`,
      HOVER: `hover:bg-(--plt-blue-bg-l-hover) dark:hover:bg-(--plt-blue-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.BLUE.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.BLUE.DARK})`,
      FOCUS: `focus:bg-(--plt-blue-bg-l-focus) dark:focus:bg-(--plt-blue-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-blue-text-l-default) dark:text-(--plt-blue-text-d-default)`,
      HOVER: `hover:text-(--plt-blue-text-l-hover) dark:hover:text-(--plt-blue-text-d-hover)`,
      ACTIVE: `active:text-(--plt-blue-text-l-active) dark:active:text-(--plt-blue-text-d-active)`,
      FOCUS: `focus:text-(--plt-blue-text-l-focus) dark:focus:text-(--plt-blue-text-d-focus)`,
    },
  },
  INDIGO: {
    BORDER: {
      DEFAULT: `border-(--plt-indigo-border-l-default) dark:border-(--plt-indigo-border-d-default)`,
      HOVER: `hover:border-(--plt-indigo-border-l-hover) dark:hover:border-(--plt-indigo-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.INDIGO.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.INDIGO.DARK})`,
      FOCUS: `focus:border-(--plt-indigo-border-l-focus) dark:focus:border-(--plt-indigo-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.INDIGO.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.INDIGO.DARK})`,
      HOVER: `hover:fill-(--plt-indigo-icon-l-hover) dark:hover:fill-(--plt-indigo-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-indigo-icon-l-active) dark:active:fill-(--plt-indigo-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-indigo-icon-l-focus) dark:focus:fill-(--plt-indigo-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-indigo-bg-l-default) dark:bg-(--plt-indigo-bg-d-default)`,
      HOVER: `hover:bg-(--plt-indigo-bg-l-hover) dark:hover:bg-(--plt-indigo-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.INDIGO.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.INDIGO.DARK})`,
      FOCUS: `focus:bg-(--plt-indigo-bg-l-focus) dark:focus:bg-(--plt-indigo-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-indigo-text-l-default) dark:text-(--plt-indigo-text-d-default)`,
      HOVER: `hover:text-(--plt-indigo-text-l-hover) dark:hover:text-(--plt-indigo-text-d-hover)`,
      ACTIVE: `active:text-(--plt-indigo-text-l-active) dark:active:text-(--plt-indigo-text-d-active)`,
      FOCUS: `focus:text-(--plt-indigo-text-l-focus) dark:focus:text-(--plt-indigo-text-d-focus)`,
    },
  },
  VIOLET: {
    BORDER: {
      DEFAULT: `border-(--plt-violet-border-l-default) dark:border-(--plt-violet-border-d-default)`,
      HOVER: `hover:border-(--plt-violet-border-l-hover) dark:hover:border-(--plt-violet-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.VIOLET.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.VIOLET.DARK})`,
      FOCUS: `focus:border-(--plt-violet-border-l-focus) dark:focus:border-(--plt-violet-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.VIOLET.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.VIOLET.DARK})`,
      HOVER: `hover:fill-(--plt-violet-icon-l-hover) dark:hover:fill-(--plt-violet-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-violet-icon-l-active) dark:active:fill-(--plt-violet-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-violet-icon-l-focus) dark:focus:fill-(--plt-violet-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-violet-bg-l-default) dark:bg-(--plt-violet-bg-d-default)`,
      HOVER: `hover:bg-(--plt-violet-bg-l-hover) dark:hover:bg-(--plt-violet-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.VIOLET.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.VIOLET.DARK})`,
      FOCUS: `focus:bg-(--plt-violet-bg-l-focus) dark:focus:bg-(--plt-violet-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-violet-text-l-default) dark:text-(--plt-violet-text-d-default)`,
      HOVER: `hover:text-(--plt-violet-text-l-hover) dark:hover:text-(--plt-violet-text-d-hover)`,
      ACTIVE: `active:text-(--plt-violet-text-l-active) dark:active:text-(--plt-violet-text-d-active)`,
      FOCUS: `focus:text-(--plt-violet-text-l-focus) dark:focus:text-(--plt-violet-text-d-focus)`,
    },
  },
  PURPLE: {
    BORDER: {
      DEFAULT: `border-(--plt-purple-border-l-default) dark:border-(--plt-purple-border-d-default)`,
      HOVER: `hover:border-(--plt-purple-border-l-hover) dark:hover:border-(--plt-purple-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.PURPLE.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.PURPLE.DARK})`,
      FOCUS: `focus:border-(--plt-purple-border-l-focus) dark:focus:border-(--plt-purple-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.PURPLE.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.PURPLE.DARK})`,
      HOVER: `hover:fill-(--plt-purple-icon-l-hover) dark:hover:fill-(--plt-purple-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-purple-icon-l-active) dark:active:fill-(--plt-purple-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-purple-icon-l-focus) dark:focus:fill-(--plt-purple-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-purple-bg-l-default) dark:bg-(--plt-purple-bg-d-default)`,
      HOVER: `hover:bg-(--plt-purple-bg-l-hover) dark:hover:bg-(--plt-purple-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.PURPLE.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.PURPLE.DARK})`,
      FOCUS: `focus:bg-(--plt-purple-bg-l-focus) dark:focus:bg-(--plt-purple-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-purple-text-l-default) dark:text-(--plt-purple-text-d-default)`,
      HOVER: `hover:text-(--plt-purple-text-l-hover) dark:hover:text-(--plt-purple-text-d-hover)`,
      ACTIVE: `active:text-(--plt-purple-text-l-active) dark:active:text-(--plt-purple-text-d-active)`,
      FOCUS: `focus:text-(--plt-purple-text-l-focus) dark:focus:text-(--plt-purple-text-d-focus)`,
    },
  },
  FUCHSIA: {
    BORDER: {
      DEFAULT: `border-(--plt-fuchsia-border-l-default) dark:border-(--plt-fuchsia-border-d-default)`,
      HOVER: `hover:border-(--plt-fuchsia-border-l-hover) dark:hover:border-(--plt-fuchsia-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.FUCHSIA.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.FUCHSIA.DARK})`,
      FOCUS: `focus:border-(--plt-fuchsia-border-l-focus) dark:focus:border-(--plt-fuchsia-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.FUCHSIA.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.FUCHSIA.DARK})`,
      HOVER: `hover:fill-(--plt-fuchsia-icon-l-hover) dark:hover:fill-(--plt-fuchsia-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-fuchsia-icon-l-active) dark:active:fill-(--plt-fuchsia-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-fuchsia-icon-l-focus) dark:focus:fill-(--plt-fuchsia-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-fuchsia-bg-l-default) dark:bg-(--plt-fuchsia-bg-d-default)`,
      HOVER: `hover:bg-(--plt-fuchsia-bg-l-hover) dark:hover:bg-(--plt-fuchsia-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.FUCHSIA.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.FUCHSIA.DARK})`,
      FOCUS: `focus:bg-(--plt-fuchsia-bg-l-focus) dark:focus:bg-(--plt-fuchsia-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-fuchsia-text-l-default) dark:text-(--plt-fuchsia-text-d-default)`,
      HOVER: `hover:text-(--plt-fuchsia-text-l-hover) dark:hover:text-(--plt-fuchsia-text-d-hover)`,
      ACTIVE: `active:text-(--plt-fuchsia-text-l-active) dark:active:text-(--plt-fuchsia-text-d-active)`,
      FOCUS: `focus:text-(--plt-fuchsia-text-l-focus) dark:focus:text-(--plt-fuchsia-text-d-focus)`,
    },
  },
  PINK: {
    BORDER: {
      DEFAULT: `border-(--plt-pink-border-l-default) dark:border-(--plt-pink-border-d-default)`,
      HOVER: `hover:border-(--plt-pink-border-l-hover) dark:hover:border-(--plt-pink-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.PINK.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.PINK.DARK})`,
      FOCUS: `focus:border-(--plt-pink-border-l-focus) dark:focus:border-(--plt-pink-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.PINK.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.PINK.DARK})`,
      HOVER: `hover:fill-(--plt-pink-icon-l-hover) dark:hover:fill-(--plt-pink-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-pink-icon-l-active) dark:active:fill-(--plt-pink-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-pink-icon-l-focus) dark:focus:fill-(--plt-pink-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-pink-bg-l-default) dark:bg-(--plt-pink-bg-d-default)`,
      HOVER: `hover:bg-(--plt-pink-bg-l-hover) dark:hover:bg-(--plt-pink-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.PINK.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.PINK.DARK})`,
      FOCUS: `focus:bg-(--plt-pink-bg-l-focus) dark:focus:bg-(--plt-pink-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-pink-text-l-default) dark:text-(--plt-pink-text-d-default)`,
      HOVER: `hover:text-(--plt-pink-text-l-hover) dark:hover:text-(--plt-pink-text-d-hover)`,
      ACTIVE: `active:text-(--plt-pink-text-l-active) dark:active:text-(--plt-pink-text-d-active)`,
      FOCUS: `focus:text-(--plt-pink-text-l-focus) dark:focus:text-(--plt-pink-text-d-focus)`,
    },
  },
  ROSE: {
    BORDER: {
      DEFAULT: `border-(--plt-rose-border-l-default) dark:border-(--plt-rose-border-d-default)`,
      HOVER: `hover:border-(--plt-rose-border-l-hover) dark:hover:border-(--plt-rose-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.ROSE.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.ROSE.DARK})`,
      FOCUS: `focus:border-(--plt-rose-border-l-focus) dark:focus:border-(--plt-rose-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.ROSE.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.ROSE.DARK})`,
      HOVER: `hover:fill-(--plt-rose-icon-l-hover) dark:hover:fill-(--plt-rose-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-rose-icon-l-active) dark:active:fill-(--plt-rose-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-rose-icon-l-focus) dark:focus:fill-(--plt-rose-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-rose-bg-l-default) dark:bg-(--plt-rose-bg-d-default)`,
      HOVER: `hover:bg-(--plt-rose-bg-l-hover) dark:hover:bg-(--plt-rose-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.ROSE.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.ROSE.DARK})`,
      FOCUS: `focus:bg-(--plt-rose-bg-l-focus) dark:focus:bg-(--plt-rose-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-rose-text-l-default) dark:text-(--plt-rose-text-d-default)`,
      HOVER: `hover:text-(--plt-rose-text-l-hover) dark:hover:text-(--plt-rose-text-d-hover)`,
      ACTIVE: `active:text-(--plt-rose-text-l-active) dark:active:text-(--plt-rose-text-d-active)`,
      FOCUS: `focus:text-(--plt-rose-text-l-focus) dark:focus:text-(--plt-rose-text-d-focus)`,
    },
  },
  SLATE: {
    BORDER: {
      DEFAULT: `border-(--plt-slate-border-l-default) dark:border-(--plt-slate-border-d-default)`,
      HOVER: `hover:border-(--plt-slate-border-l-hover) dark:hover:border-(--plt-slate-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.SLATE.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.SLATE.DARK})`,
      FOCUS: `focus:border-(--plt-slate-border-l-focus) dark:focus:border-(--plt-slate-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.SLATE.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.SLATE.DARK})`,
      HOVER: `hover:fill-(--plt-slate-icon-l-hover) dark:hover:fill-(--plt-slate-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-slate-icon-l-active) dark:active:fill-(--plt-slate-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-slate-icon-l-focus) dark:focus:fill-(--plt-slate-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-slate-bg-l-default) dark:bg-(--plt-slate-bg-d-default)`,
      HOVER: `hover:bg-(--plt-slate-bg-l-hover) dark:hover:bg-(--plt-slate-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.SLATE.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.SLATE.DARK})`,
      FOCUS: `focus:bg-(--plt-slate-bg-l-focus) dark:focus:bg-(--plt-slate-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-slate-text-l-default) dark:text-(--plt-slate-text-d-default)`,
      HOVER: `hover:text-(--plt-slate-text-l-hover) dark:hover:text-(--plt-slate-text-d-hover)`,
      ACTIVE: `active:text-(--plt-slate-text-l-active) dark:active:text-(--plt-slate-text-d-active)`,
      FOCUS: `focus:text-(--plt-slate-text-l-focus) dark:focus:text-(--plt-slate-text-d-focus)`,
    },
  },
  GRAY: {
    BORDER: {
      DEFAULT: `border-(--plt-gray-border-l-default) dark:border-(--plt-gray-border-d-default)`,
      HOVER: `hover:border-(--plt-gray-border-l-hover) dark:hover:border-(--plt-gray-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.GRAY.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.GRAY.DARK})`,
      FOCUS: `focus:border-(--plt-gray-border-l-focus) dark:focus:border-(--plt-gray-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.GRAY.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.GRAY.DARK})`,
      HOVER: `hover:fill-(--plt-gray-icon-l-hover) dark:hover:fill-(--plt-gray-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-gray-icon-l-active) dark:active:fill-(--plt-gray-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-gray-icon-l-focus) dark:focus:fill-(--plt-gray-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-gray-bg-l-default) dark:bg-(--plt-gray-bg-d-default)`,
      HOVER: `hover:bg-(--plt-gray-bg-l-hover) dark:hover:bg-(--plt-gray-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.GRAY.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.GRAY.DARK})`,
      FOCUS: `focus:bg-(--plt-gray-bg-l-focus) dark:focus:bg-(--plt-gray-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-gray-text-l-default) dark:text-(--plt-gray-text-d-default)`,
      HOVER: `hover:text-(--plt-gray-text-l-hover) dark:hover:text-(--plt-gray-text-d-hover)`,
      ACTIVE: `active:text-(--plt-gray-text-l-active) dark:active:text-(--plt-gray-text-d-active)`,
      FOCUS: `focus:text-(--plt-gray-text-l-focus) dark:focus:text-(--plt-gray-text-d-focus)`,
    },
  },
  ZINC: {
    BORDER: {
      DEFAULT: `border-(--plt-zinc-border-l-default) dark:border-(--plt-zinc-border-d-default)`,
      HOVER: `hover:border-(--plt-zinc-border-l-hover) dark:hover:border-(--plt-zinc-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.ZINC.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.ZINC.DARK})`,
      FOCUS: `focus:border-(--plt-zinc-border-l-focus) dark:focus:border-(--plt-zinc-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.ZINC.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.ZINC.DARK})`,
      HOVER: `hover:fill-(--plt-zinc-icon-l-hover) dark:hover:fill-(--plt-zinc-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-zinc-icon-l-active) dark:active:fill-(--plt-zinc-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-zinc-icon-l-focus) dark:focus:fill-(--plt-zinc-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-zinc-bg-l-default) dark:bg-(--plt-zinc-bg-d-default)`,
      HOVER: `hover:bg-(--plt-zinc-bg-l-hover) dark:hover:bg-(--plt-zinc-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.ZINC.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.ZINC.DARK})`,
      FOCUS: `focus:bg-(--plt-zinc-bg-l-focus) dark:focus:bg-(--plt-zinc-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-zinc-text-l-default) dark:text-(--plt-zinc-text-d-default)`,
      HOVER: `hover:text-(--plt-zinc-text-l-hover) dark:hover:text-(--plt-zinc-text-d-hover)`,
      ACTIVE: `active:text-(--plt-zinc-text-l-active) dark:active:text-(--plt-zinc-text-d-active)`,
      FOCUS: `focus:text-(--plt-zinc-text-l-focus) dark:focus:text-(--plt-zinc-text-d-focus)`,
    },
  },
  NEUTRAL: {
    BORDER: {
      DEFAULT: `border-(--plt-neutral-border-l-default) dark:border-(--plt-neutral-border-d-default)`,
      HOVER: `hover:border-(--plt-neutral-border-l-hover) dark:hover:border-(--plt-neutral-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.NEUTRAL.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.NEUTRAL.DARK})`,
      FOCUS: `focus:border-(--plt-neutral-border-l-focus) dark:focus:border-(--plt-neutral-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.NEUTRAL.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.NEUTRAL.DARK})`,
      HOVER: `hover:fill-(--plt-neutral-icon-l-hover) dark:hover:fill-(--plt-neutral-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-neutral-icon-l-active) dark:active:fill-(--plt-neutral-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-neutral-icon-l-focus) dark:focus:fill-(--plt-neutral-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-neutral-bg-l-default) dark:bg-(--plt-neutral-bg-d-default)`,
      HOVER: `hover:bg-(--plt-neutral-bg-l-hover) dark:hover:bg-(--plt-neutral-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.NEUTRAL.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.NEUTRAL.DARK})`,
      FOCUS: `focus:bg-(--plt-neutral-bg-l-focus) dark:focus:bg-(--plt-neutral-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-neutral-text-l-default) dark:text-(--plt-neutral-text-d-default)`,
      HOVER: `hover:text-(--plt-neutral-text-l-hover) dark:hover:text-(--plt-neutral-text-d-hover)`,
      ACTIVE: `active:text-(--plt-neutral-text-l-active) dark:active:text-(--plt-neutral-text-d-active)`,
      FOCUS: `focus:text-(--plt-neutral-text-l-focus) dark:focus:text-(--plt-neutral-text-d-focus)`,
    },
  },
  STONE: {
    BORDER: {
      DEFAULT: `border-(--plt-stone-border-l-default) dark:border-(--plt-stone-border-d-default)`,
      HOVER: `hover:border-(--plt-stone-border-l-hover) dark:hover:border-(--plt-stone-border-d-hover)`,
      ACTIVE: `active:border-(${COLOR_BORDER_ACTIVE.STONE.LIGHT}) dark:active:border-(${COLOR_BORDER_ACTIVE.STONE.DARK})`,
      FOCUS: `focus:border-(--plt-stone-border-l-focus) dark:focus:border-(--plt-stone-border-d-focus)`,
    },
    ICON: {
      DEFAULT: `fill-(${COLOR_ICON_DEFAULT.STONE.LIGHT}) dark:fill-(${COLOR_ICON_DEFAULT.STONE.DARK})`,
      HOVER: `hover:fill-(--plt-stone-icon-l-hover) dark:hover:fill-(--plt-stone-icon-d-hover)`,
      ACTIVE: `active:fill-(--plt-stone-icon-l-active) dark:active:fill-(--plt-stone-icon-d-active)`,
      FOCUS: `focus:fill-(--plt-stone-icon-l-focus) dark:focus:fill-(--plt-stone-icon-d-focus)`,
    },
    BG: {
      DEFAULT: `bg-(--plt-stone-bg-l-default) dark:bg-(--plt-stone-bg-d-default)`,
      HOVER: `hover:bg-(--plt-stone-bg-l-hover) dark:hover:bg-(--plt-stone-bg-d-hover)`,
      ACTIVE: `active:bg-(${COLOR_BG_ACTIVE.STONE.LIGHT}) dark:active:bg-(${COLOR_BG_ACTIVE.STONE.DARK})`,
      FOCUS: `focus:bg-(--plt-stone-bg-l-focus) dark:focus:bg-(--plt-stone-bg-d-focus)`,
    },
    TEXT: {
      DEFAULT: `text-(--plt-stone-text-l-default) dark:text-(--plt-stone-text-d-default)`,
      HOVER: `hover:text-(--plt-stone-text-l-hover) dark:hover:text-(--plt-stone-text-d-hover)`,
      ACTIVE: `active:text-(--plt-stone-text-l-active) dark:active:text-(--plt-stone-text-d-active)`,
      FOCUS: `focus:text-(--plt-stone-text-l-focus) dark:focus:text-(--plt-stone-text-d-focus)`,
    },
  },
} as const;
export default COLOR_PALETTES_STYLES;

export const COLOR_PALETTE_DEFAULT: ColorPalettes = "NEUTRAL";
