/**
 * All color palettes, that used in project.
 * @see https://tailwindcss.com/docs/colors
 */
const COLOR_PALETTES = {
  RED: {
    BORDER: {
      DEFAULT:
        "border-(--plt-red-border-l-default) dark:border-(--plt-red-border-d-default)",
      HOVER:
        "hover:border-(--plt-red-border-l-hover) dark:hover:border-(--plt-red-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-red-border-l-active) dark:active:border-(--plt-red-border-d-active)",
      FOCUS:
        "focus:border-(--plt-red-border-l-focus) dark:focus:border-(--plt-red-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-red-bg-l-default) dark:bg-(--plt-red-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-red-bg-l-hover) dark:hover:bg-(--plt-red-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-red-bg-l-active) dark:active:bg-(--plt-red-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-red-bg-l-focus) dark:focus:bg-(--plt-red-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-red-text-l-default) dark:text-(--plt-red-text-d-default)",
      HOVER:
        "hover:text-(--plt-red-text-l-hover) dark:hover:text-(--plt-red-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-red-text-l-active) dark:active:text-(--plt-red-text-d-active)",
      FOCUS:
        "focus:text-(--plt-red-text-l-focus) dark:focus:text-(--plt-red-text-d-focus)",
    },
  },
  ORANGE: {
    BORDER: {
      DEFAULT:
        "border-(--plt-orange-border-l-default) dark:border-(--plt-orange-border-d-default)",
      HOVER:
        "hover:border-(--plt-orange-border-l-hover) dark:hover:border-(--plt-orange-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-orange-border-l-active) dark:active:border-(--plt-orange-border-d-active)",
      FOCUS:
        "focus:border-(--plt-orange-border-l-focus) dark:focus:border-(--plt-orange-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-orange-bg-l-default) dark:bg-(--plt-orange-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-orange-bg-l-hover) dark:hover:bg-(--plt-orange-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-orange-bg-l-active) dark:active:bg-(--plt-orange-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-orange-bg-l-focus) dark:focus:bg-(--plt-orange-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-orange-text-l-default) dark:text-(--plt-orange-text-d-default)",
      HOVER:
        "hover:text-(--plt-orange-text-l-hover) dark:hover:text-(--plt-orange-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-orange-text-l-active) dark:active:text-(--plt-orange-text-d-active)",
      FOCUS:
        "focus:text-(--plt-orange-text-l-focus) dark:focus:text-(--plt-orange-text-d-focus)",
    },
  },
  AMBER: {
    BORDER: {
      DEFAULT:
        "border-(--plt-amber-border-l-default) dark:border-(--plt-amber-border-d-default)",
      HOVER:
        "hover:border-(--plt-amber-border-l-hover) dark:hover:border-(--plt-amber-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-amber-border-l-active) dark:active:border-(--plt-amber-border-d-active)",
      FOCUS:
        "focus:border-(--plt-amber-border-l-focus) dark:focus:border-(--plt-amber-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-amber-bg-l-default) dark:bg-(--plt-amber-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-amber-bg-l-hover) dark:hover:bg-(--plt-amber-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-amber-bg-l-active) dark:active:bg-(--plt-amber-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-amber-bg-l-focus) dark:focus:bg-(--plt-amber-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-amber-text-l-default) dark:text-(--plt-amber-text-d-default)",
      HOVER:
        "hover:text-(--plt-amber-text-l-hover) dark:hover:text-(--plt-amber-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-amber-text-l-active) dark:active:text-(--plt-amber-text-d-active)",
      FOCUS:
        "focus:text-(--plt-amber-text-l-focus) dark:focus:text-(--plt-amber-text-d-focus)",
    },
  },
  YELLOW: {
    BORDER: {
      DEFAULT:
        "border-(--plt-yellow-border-l-default) dark:border-(--plt-yellow-border-d-default)",
      HOVER:
        "hover:border-(--plt-yellow-border-l-hover) dark:hover:border-(--plt-yellow-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-yellow-border-l-active) dark:active:border-(--plt-yellow-border-d-active)",
      FOCUS:
        "focus:border-(--plt-yellow-border-l-focus) dark:focus:border-(--plt-yellow-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-yellow-bg-l-default) dark:bg-(--plt-yellow-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-yellow-bg-l-hover) dark:hover:bg-(--plt-yellow-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-yellow-bg-l-active) dark:active:bg-(--plt-yellow-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-yellow-bg-l-focus) dark:focus:bg-(--plt-yellow-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-yellow-text-l-default) dark:text-(--plt-yellow-text-d-default)",
      HOVER:
        "hover:text-(--plt-yellow-text-l-hover) dark:hover:text-(--plt-yellow-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-yellow-text-l-active) dark:active:text-(--plt-yellow-text-d-active)",
      FOCUS:
        "focus:text-(--plt-yellow-text-l-focus) dark:focus:text-(--plt-yellow-text-d-focus)",
    },
  },
  LIME: {
    BORDER: {
      DEFAULT:
        "border-(--plt-lime-border-l-default) dark:border-(--plt-lime-border-d-default)",
      HOVER:
        "hover:border-(--plt-lime-border-l-hover) dark:hover:border-(--plt-lime-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-lime-border-l-active) dark:active:border-(--plt-lime-border-d-active)",
      FOCUS:
        "focus:border-(--plt-lime-border-l-focus) dark:focus:border-(--plt-lime-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-lime-bg-l-default) dark:bg-(--plt-lime-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-lime-bg-l-hover) dark:hover:bg-(--plt-lime-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-lime-bg-l-active) dark:active:bg-(--plt-lime-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-lime-bg-l-focus) dark:focus:bg-(--plt-lime-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-lime-text-l-default) dark:text-(--plt-lime-text-d-default)",
      HOVER:
        "hover:text-(--plt-lime-text-l-hover) dark:hover:text-(--plt-lime-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-lime-text-l-active) dark:active:text-(--plt-lime-text-d-active)",
      FOCUS:
        "focus:text-(--plt-lime-text-l-focus) dark:focus:text-(--plt-lime-text-d-focus)",
    },
  },
  GREEN: {
    BORDER: {
      DEFAULT:
        "border-(--plt-green-border-l-default) dark:border-(--plt-green-border-d-default)",
      HOVER:
        "hover:border-(--plt-green-border-l-hover) dark:hover:border-(--plt-green-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-green-border-l-active) dark:active:border-(--plt-green-border-d-active)",
      FOCUS:
        "focus:border-(--plt-green-border-l-focus) dark:focus:border-(--plt-green-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-green-bg-l-default) dark:bg-(--plt-green-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-green-bg-l-hover) dark:hover:bg-(--plt-green-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-green-bg-l-active) dark:active:bg-(--plt-green-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-green-bg-l-focus) dark:focus:bg-(--plt-green-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-green-text-l-default) dark:text-(--plt-green-text-d-default)",
      HOVER:
        "hover:text-(--plt-green-text-l-hover) dark:hover:text-(--plt-green-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-green-text-l-active) dark:active:text-(--plt-green-text-d-active)",
      FOCUS:
        "focus:text-(--plt-green-text-l-focus) dark:focus:text-(--plt-green-text-d-focus)",
    },
  },
  EMERALD: {
    BORDER: {
      DEFAULT:
        "border-(--plt-emerald-border-l-default) dark:border-(--plt-emerald-border-d-default)",
      HOVER:
        "hover:border-(--plt-emerald-border-l-hover) dark:hover:border-(--plt-emerald-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-emerald-border-l-active) dark:active:border-(--plt-emerald-border-d-active)",
      FOCUS:
        "focus:border-(--plt-emerald-border-l-focus) dark:focus:border-(--plt-emerald-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-emerald-bg-l-default) dark:bg-(--plt-emerald-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-emerald-bg-l-hover) dark:hover:bg-(--plt-emerald-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-emerald-bg-l-active) dark:active:bg-(--plt-emerald-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-emerald-bg-l-focus) dark:focus:bg-(--plt-emerald-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-emerald-text-l-default) dark:text-(--plt-emerald-text-d-default)",
      HOVER:
        "hover:text-(--plt-emerald-text-l-hover) dark:hover:text-(--plt-emerald-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-emerald-text-l-active) dark:active:text-(--plt-emerald-text-d-active)",
      FOCUS:
        "focus:text-(--plt-emerald-text-l-focus) dark:focus:text-(--plt-emerald-text-d-focus)",
    },
  },
  TEAL: {
    BORDER: {
      DEFAULT:
        "border-(--plt-teal-border-l-default) dark:border-(--plt-teal-border-d-default)",
      HOVER:
        "hover:border-(--plt-teal-border-l-hover) dark:hover:border-(--plt-teal-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-teal-border-l-active) dark:active:border-(--plt-teal-border-d-active)",
      FOCUS:
        "focus:border-(--plt-teal-border-l-focus) dark:focus:border-(--plt-teal-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-teal-bg-l-default) dark:bg-(--plt-teal-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-teal-bg-l-hover) dark:hover:bg-(--plt-teal-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-teal-bg-l-active) dark:active:bg-(--plt-teal-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-teal-bg-l-focus) dark:focus:bg-(--plt-teal-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-teal-text-l-default) dark:text-(--plt-teal-text-d-default)",
      HOVER:
        "hover:text-(--plt-teal-text-l-hover) dark:hover:text-(--plt-teal-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-teal-text-l-active) dark:active:text-(--plt-teal-text-d-active)",
      FOCUS:
        "focus:text-(--plt-teal-text-l-focus) dark:focus:text-(--plt-teal-text-d-focus)",
    },
  },
  CYAN: {
    BORDER: {
      DEFAULT:
        "border-(--plt-cyan-border-l-default) dark:border-(--plt-cyan-border-d-default)",
      HOVER:
        "hover:border-(--plt-cyan-border-l-hover) dark:hover:border-(--plt-cyan-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-cyan-border-l-active) dark:active:border-(--plt-cyan-border-d-active)",
      FOCUS:
        "focus:border-(--plt-cyan-border-l-focus) dark:focus:border-(--plt-cyan-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-cyan-bg-l-default) dark:bg-(--plt-cyan-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-cyan-bg-l-hover) dark:hover:bg-(--plt-cyan-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-cyan-bg-l-active) dark:active:bg-(--plt-cyan-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-cyan-bg-l-focus) dark:focus:bg-(--plt-cyan-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-cyan-text-l-default) dark:text-(--plt-cyan-text-d-default)",
      HOVER:
        "hover:text-(--plt-cyan-text-l-hover) dark:hover:text-(--plt-cyan-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-cyan-text-l-active) dark:active:text-(--plt-cyan-text-d-active)",
      FOCUS:
        "focus:text-(--plt-cyan-text-l-focus) dark:focus:text-(--plt-cyan-text-d-focus)",
    },
  },
  SKY: {
    BORDER: {
      DEFAULT:
        "border-(--plt-sky-border-l-default) dark:border-(--plt-sky-border-d-default)",
      HOVER:
        "hover:border-(--plt-sky-border-l-hover) dark:hover:border-(--plt-sky-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-sky-border-l-active) dark:active:border-(--plt-sky-border-d-active)",
      FOCUS:
        "focus:border-(--plt-sky-border-l-focus) dark:focus:border-(--plt-sky-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-sky-bg-l-default) dark:bg-(--plt-sky-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-sky-bg-l-hover) dark:hover:bg-(--plt-sky-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-sky-bg-l-active) dark:active:bg-(--plt-sky-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-sky-bg-l-focus) dark:focus:bg-(--plt-sky-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-sky-text-l-default) dark:text-(--plt-sky-text-d-default)",
      HOVER:
        "hover:text-(--plt-sky-text-l-hover) dark:hover:text-(--plt-sky-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-sky-text-l-active) dark:active:text-(--plt-sky-text-d-active)",
      FOCUS:
        "focus:text-(--plt-sky-text-l-focus) dark:focus:text-(--plt-sky-text-d-focus)",
    },
  },
  BLUE: {
    BORDER: {
      DEFAULT:
        "border-(--plt-blue-border-l-default) dark:border-(--plt-blue-border-d-default)",
      HOVER:
        "hover:border-(--plt-blue-border-l-hover) dark:hover:border-(--plt-blue-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-blue-border-l-active) dark:active:border-(--plt-blue-border-d-active)",
      FOCUS:
        "focus:border-(--plt-blue-border-l-focus) dark:focus:border-(--plt-blue-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-blue-bg-l-default) dark:bg-(--plt-blue-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-blue-bg-l-hover) dark:hover:bg-(--plt-blue-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-blue-bg-l-active) dark:active:bg-(--plt-blue-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-blue-bg-l-focus) dark:focus:bg-(--plt-blue-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-blue-text-l-default) dark:text-(--plt-blue-text-d-default)",
      HOVER:
        "hover:text-(--plt-blue-text-l-hover) dark:hover:text-(--plt-blue-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-blue-text-l-active) dark:active:text-(--plt-blue-text-d-active)",
      FOCUS:
        "focus:text-(--plt-blue-text-l-focus) dark:focus:text-(--plt-blue-text-d-focus)",
    },
  },
  INDIGO: {
    BORDER: {
      DEFAULT:
        "border-(--plt-indigo-border-l-default) dark:border-(--plt-indigo-border-d-default)",
      HOVER:
        "hover:border-(--plt-indigo-border-l-hover) dark:hover:border-(--plt-indigo-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-indigo-border-l-active) dark:active:border-(--plt-indigo-border-d-active)",
      FOCUS:
        "focus:border-(--plt-indigo-border-l-focus) dark:focus:border-(--plt-indigo-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-indigo-bg-l-default) dark:bg-(--plt-indigo-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-indigo-bg-l-hover) dark:hover:bg-(--plt-indigo-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-indigo-bg-l-active) dark:active:bg-(--plt-indigo-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-indigo-bg-l-focus) dark:focus:bg-(--plt-indigo-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-indigo-text-l-default) dark:text-(--plt-indigo-text-d-default)",
      HOVER:
        "hover:text-(--plt-indigo-text-l-hover) dark:hover:text-(--plt-indigo-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-indigo-text-l-active) dark:active:text-(--plt-indigo-text-d-active)",
      FOCUS:
        "focus:text-(--plt-indigo-text-l-focus) dark:focus:text-(--plt-indigo-text-d-focus)",
    },
  },
  VIOLET: {
    BORDER: {
      DEFAULT:
        "border-(--plt-violet-border-l-default) dark:border-(--plt-violet-border-d-default)",
      HOVER:
        "hover:border-(--plt-violet-border-l-hover) dark:hover:border-(--plt-violet-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-violet-border-l-active) dark:active:border-(--plt-violet-border-d-active)",
      FOCUS:
        "focus:border-(--plt-violet-border-l-focus) dark:focus:border-(--plt-violet-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-violet-bg-l-default) dark:bg-(--plt-violet-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-violet-bg-l-hover) dark:hover:bg-(--plt-violet-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-violet-bg-l-active) dark:active:bg-(--plt-violet-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-violet-bg-l-focus) dark:focus:bg-(--plt-violet-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-violet-text-l-default) dark:text-(--plt-violet-text-d-default)",
      HOVER:
        "hover:text-(--plt-violet-text-l-hover) dark:hover:text-(--plt-violet-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-violet-text-l-active) dark:active:text-(--plt-violet-text-d-active)",
      FOCUS:
        "focus:text-(--plt-violet-text-l-focus) dark:focus:text-(--plt-violet-text-d-focus)",
    },
  },
  PURPLE: {
    BORDER: {
      DEFAULT:
        "border-(--plt-purple-border-l-default) dark:border-(--plt-purple-border-d-default)",
      HOVER:
        "hover:border-(--plt-purple-border-l-hover) dark:hover:border-(--plt-purple-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-purple-border-l-active) dark:active:border-(--plt-purple-border-d-active)",
      FOCUS:
        "focus:border-(--plt-purple-border-l-focus) dark:focus:border-(--plt-purple-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-purple-bg-l-default) dark:bg-(--plt-purple-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-purple-bg-l-hover) dark:hover:bg-(--plt-purple-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-purple-bg-l-active) dark:active:bg-(--plt-purple-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-purple-bg-l-focus) dark:focus:bg-(--plt-purple-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-purple-text-l-default) dark:text-(--plt-purple-text-d-default)",
      HOVER:
        "hover:text-(--plt-purple-text-l-hover) dark:hover:text-(--plt-purple-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-purple-text-l-active) dark:active:text-(--plt-purple-text-d-active)",
      FOCUS:
        "focus:text-(--plt-purple-text-l-focus) dark:focus:text-(--plt-purple-text-d-focus)",
    },
  },
  FUCHSIA: {
    BORDER: {
      DEFAULT:
        "border-(--plt-fuchsia-border-l-default) dark:border-(--plt-fuchsia-border-d-default)",
      HOVER:
        "hover:border-(--plt-fuchsia-border-l-hover) dark:hover:border-(--plt-fuchsia-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-fuchsia-border-l-active) dark:active:border-(--plt-fuchsia-border-d-active)",
      FOCUS:
        "focus:border-(--plt-fuchsia-border-l-focus) dark:focus:border-(--plt-fuchsia-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-fuchsia-bg-l-default) dark:bg-(--plt-fuchsia-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-fuchsia-bg-l-hover) dark:hover:bg-(--plt-fuchsia-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-fuchsia-bg-l-active) dark:active:bg-(--plt-fuchsia-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-fuchsia-bg-l-focus) dark:focus:bg-(--plt-fuchsia-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-fuchsia-text-l-default) dark:text-(--plt-fuchsia-text-d-default)",
      HOVER:
        "hover:text-(--plt-fuchsia-text-l-hover) dark:hover:text-(--plt-fuchsia-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-fuchsia-text-l-active) dark:active:text-(--plt-fuchsia-text-d-active)",
      FOCUS:
        "focus:text-(--plt-fuchsia-text-l-focus) dark:focus:text-(--plt-fuchsia-text-d-focus)",
    },
  },
  PINK: {
    BORDER: {
      DEFAULT:
        "border-(--plt-pink-border-l-default) dark:border-(--plt-pink-border-d-default)",
      HOVER:
        "hover:border-(--plt-pink-border-l-hover) dark:hover:border-(--plt-pink-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-pink-border-l-active) dark:active:border-(--plt-pink-border-d-active)",
      FOCUS:
        "focus:border-(--plt-pink-border-l-focus) dark:focus:border-(--plt-pink-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-pink-bg-l-default) dark:bg-(--plt-pink-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-pink-bg-l-hover) dark:hover:bg-(--plt-pink-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-pink-bg-l-active) dark:active:bg-(--plt-pink-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-pink-bg-l-focus) dark:focus:bg-(--plt-pink-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-pink-text-l-default) dark:text-(--plt-pink-text-d-default)",
      HOVER:
        "hover:text-(--plt-pink-text-l-hover) dark:hover:text-(--plt-pink-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-pink-text-l-active) dark:active:text-(--plt-pink-text-d-active)",
      FOCUS:
        "focus:text-(--plt-pink-text-l-focus) dark:focus:text-(--plt-pink-text-d-focus)",
    },
  },
  ROSE: {
    BORDER: {
      DEFAULT:
        "border-(--plt-rose-border-l-default) dark:border-(--plt-rose-border-d-default)",
      HOVER:
        "hover:border-(--plt-rose-border-l-hover) dark:hover:border-(--plt-rose-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-rose-border-l-active) dark:active:border-(--plt-rose-border-d-active)",
      FOCUS:
        "focus:border-(--plt-rose-border-l-focus) dark:focus:border-(--plt-rose-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-rose-bg-l-default) dark:bg-(--plt-rose-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-rose-bg-l-hover) dark:hover:bg-(--plt-rose-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-rose-bg-l-active) dark:active:bg-(--plt-rose-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-rose-bg-l-focus) dark:focus:bg-(--plt-rose-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-rose-text-l-default) dark:text-(--plt-rose-text-d-default)",
      HOVER:
        "hover:text-(--plt-rose-text-l-hover) dark:hover:text-(--plt-rose-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-rose-text-l-active) dark:active:text-(--plt-rose-text-d-active)",
      FOCUS:
        "focus:text-(--plt-rose-text-l-focus) dark:focus:text-(--plt-rose-text-d-focus)",
    },
  },
  SLATE: {
    BORDER: {
      DEFAULT:
        "border-(--plt-slate-border-l-default) dark:border-(--plt-slate-border-d-default)",
      HOVER:
        "hover:border-(--plt-slate-border-l-hover) dark:hover:border-(--plt-slate-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-slate-border-l-active) dark:active:border-(--plt-slate-border-d-active)",
      FOCUS:
        "focus:border-(--plt-slate-border-l-focus) dark:focus:border-(--plt-slate-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-slate-bg-l-default) dark:bg-(--plt-slate-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-slate-bg-l-hover) dark:hover:bg-(--plt-slate-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-slate-bg-l-active) dark:active:bg-(--plt-slate-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-slate-bg-l-focus) dark:focus:bg-(--plt-slate-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-slate-text-l-default) dark:text-(--plt-slate-text-d-default)",
      HOVER:
        "hover:text-(--plt-slate-text-l-hover) dark:hover:text-(--plt-slate-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-slate-text-l-active) dark:active:text-(--plt-slate-text-d-active)",
      FOCUS:
        "focus:text-(--plt-slate-text-l-focus) dark:focus:text-(--plt-slate-text-d-focus)",
    },
  },
  GRAY: {
    BORDER: {
      DEFAULT:
        "border-(--plt-gray-border-l-default) dark:border-(--plt-gray-border-d-default)",
      HOVER:
        "hover:border-(--plt-gray-border-l-hover) dark:hover:border-(--plt-gray-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-gray-border-l-active) dark:active:border-(--plt-gray-border-d-active)",
      FOCUS:
        "focus:border-(--plt-gray-border-l-focus) dark:focus:border-(--plt-gray-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-gray-bg-l-default) dark:bg-(--plt-gray-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-gray-bg-l-hover) dark:hover:bg-(--plt-gray-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-gray-bg-l-active) dark:active:bg-(--plt-gray-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-gray-bg-l-focus) dark:focus:bg-(--plt-gray-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-gray-text-l-default) dark:text-(--plt-gray-text-d-default)",
      HOVER:
        "hover:text-(--plt-gray-text-l-hover) dark:hover:text-(--plt-gray-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-gray-text-l-active) dark:active:text-(--plt-gray-text-d-active)",
      FOCUS:
        "focus:text-(--plt-gray-text-l-focus) dark:focus:text-(--plt-gray-text-d-focus)",
    },
  },
  ZINC: {
    BORDER: {
      DEFAULT:
        "border-(--plt-zinc-border-l-default) dark:border-(--plt-zinc-border-d-default)",
      HOVER:
        "hover:border-(--plt-zinc-border-l-hover) dark:hover:border-(--plt-zinc-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-zinc-border-l-active) dark:active:border-(--plt-zinc-border-d-active)",
      FOCUS:
        "focus:border-(--plt-zinc-border-l-focus) dark:focus:border-(--plt-zinc-border-d-focus)",
    },
    BG: {
      DEFAULT: "bg-(--plt-zinc-bg-l-default) dark:bg-(--plt-zinc-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-zinc-bg-l-hover) dark:hover:bg-(--plt-zinc-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-zinc-bg-l-active) dark:active:bg-(--plt-zinc-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-zinc-bg-l-focus) dark:focus:bg-(--plt-zinc-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-zinc-text-l-default) dark:text-(--plt-zinc-text-d-default)",
      HOVER:
        "hover:text-(--plt-zinc-text-l-hover) dark:hover:text-(--plt-zinc-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-zinc-text-l-active) dark:active:text-(--plt-zinc-text-d-active)",
      FOCUS:
        "focus:text-(--plt-zinc-text-l-focus) dark:focus:text-(--plt-zinc-text-d-focus)",
    },
  },
  NEUTRAL: {
    BORDER: {
      DEFAULT:
        "border-(--plt-neutral-border-l-default) dark:border-(--plt-neutral-border-d-default)",
      HOVER:
        "hover:border-(--plt-neutral-border-l-hover) dark:hover:border-(--plt-neutral-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-neutral-border-l-active) dark:active:border-(--plt-neutral-border-d-active)",
      FOCUS:
        "focus:border-(--plt-neutral-border-l-focus) dark:focus:border-(--plt-neutral-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-neutral-bg-l-default) dark:bg-(--plt-neutral-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-neutral-bg-l-hover) dark:hover:bg-(--plt-neutral-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-neutral-bg-l-active) dark:active:bg-(--plt-neutral-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-neutral-bg-l-focus) dark:focus:bg-(--plt-neutral-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-neutral-text-l-default) dark:text-(--plt-neutral-text-d-default)",
      HOVER:
        "hover:text-(--plt-neutral-text-l-hover) dark:hover:text-(--plt-neutral-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-neutral-text-l-active) dark:active:text-(--plt-neutral-text-d-active)",
      FOCUS:
        "focus:text-(--plt-neutral-text-l-focus) dark:focus:text-(--plt-neutral-text-d-focus)",
    },
  },
  STONE: {
    BORDER: {
      DEFAULT:
        "border-(--plt-stone-border-l-default) dark:border-(--plt-stone-border-d-default)",
      HOVER:
        "hover:border-(--plt-stone-border-l-hover) dark:hover:border-(--plt-stone-border-d-hover)",
      ACTIVE:
        "active:border-(--plt-stone-border-l-active) dark:active:border-(--plt-stone-border-d-active)",
      FOCUS:
        "focus:border-(--plt-stone-border-l-focus) dark:focus:border-(--plt-stone-border-d-focus)",
    },
    BG: {
      DEFAULT:
        "bg-(--plt-stone-bg-l-default) dark:bg-(--plt-stone-bg-d-default)",
      HOVER:
        "hover:bg-(--plt-stone-bg-l-hover) dark:hover:bg-(--plt-stone-bg-d-hover)",
      ACTIVE:
        "active:bg-(--plt-stone-bg-l-active) dark:active:bg-(--plt-stone-bg-d-active)",
      FOCUS:
        "focus:bg-(--plt-stone-bg-l-focus) dark:focus:bg-(--plt-stone-bg-d-focus)",
    },
    TEXT: {
      DEFAULT:
        "text-(--plt-stone-text-l-default) dark:text-(--plt-stone-text-d-default)",
      HOVER:
        "hover:text-(--plt-stone-text-l-hover) dark:hover:text-(--plt-stone-text-d-hover)",
      ACTIVE:
        "active:text-(--plt-stone-text-l-active) dark:active:text-(--plt-stone-text-d-active)",
      FOCUS:
        "focus:text-(--plt-stone-text-l-focus) dark:focus:text-(--plt-stone-text-d-focus)",
    },
  },
} as const;
export { COLOR_PALETTES };
