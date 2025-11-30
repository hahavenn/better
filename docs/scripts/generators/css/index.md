# CSS

Page about css generators

## Palettes types

Generator is located here: [`scripts/generators/css/palettes/type.ts`](https://github.com/hahavenn/better/tree/main/scripts/generators/css/palettes/type.ts)

<<< ../../../../scripts/generators/css/palettes/type.ts#generatedPalettes

Generated file: [`app/types/color/generatedPalettes.ts`](https://github.com/hahavenn/better/tree/main/app/types/color/generatedPalettes.ts)

<<< ../../../../app/types/color/generatedPalettes.ts

## Palettes state color classes

Generator is located here: [`scripts/generators/css/palettes/styles.ts`](https://github.com/hahavenn/better/tree/main/scripts/generators/css/palettes/styles.ts)

<<< ../../../../scripts/generators/css/palettes/styles.ts#generatedPalettesClasses

Generated file: [`app/constants/color/generatedPalettesClasses.ts`](https://github.com/hahavenn/better/tree/main/app/constants/color/generatedPalettesClasses.ts)

How is it looks like:

```typescript
const COLOR_GENERATED_PALETTES_CLASSES = {
  RED: {
    BORDER: {
      DEFAULT: "border-(--plt-red-border-light-default) dark:border-(--plt-red-border-dark-default)";
      HOVER: "hover:border-(--plt-red-border-light-hover) dark:hover:border-(--plt-red-border-dark-hover)";
      ACTIVE: "active:border-(--plt-red-border-light-active) dark:active:border-(--plt-red-border-dark-active)";
      FOCUS: "focus:border-(--plt-red-border-light-focus) dark:focus:border-(--plt-red-border-dark-focus)";
    }
    FILL: {
      DEFAULT: "...";
      HOVER: "...";
      ACTIVE: "...";
      FOCUS: "...";
    }
    BG: {
      DEFAULT: "...";
      HOVER: "...";
      ACTIVE: "...";
      FOCUS: "...";
    }
    TEXT: {
      DEFAULT: "...";
      HOVER: "...";
      ACTIVE: "...";
      FOCUS: "...";
    }
  }
};
```

## Palettes entity colors

Generates for every entity theme-based colors. Proceeded entities:

- [Background](#background)
- [Border](#border)
- [Fill](#fill)
- [Text](#text)

Entities are parsed from css file [`app/assets/css/colors/index.css`](https://github.com/hahavenn/better/tree/main/app/assets/css/colors/index.css)

Generator: [`scripts/generators/css/palettes/entity.ts`](https://github.com/hahavenn/better/tree/main/scripts/generators/css/palettes/entity.ts)

### Background

Generated file: [`app/constants/color/generatedBg.ts`](https://github.com/hahavenn/better/tree/main/app/constants/color/generatedBg.ts)

How it is looks like:

```typescript
export const COLOR_GENERATED_BG_DEFAULT = {
  RED: {
    LIGHT: "--plt-red-bg-light-default",
    DARK: "--plt-red-bg-dark-default",
  },
  // other colors
};
export const COLOR_GENERATED_BG_HOVER = {
  RED: {
    LIGHT: "--plt-red-bg-light-hover",
    DARK: "--plt-red-bg-dark-hover",
  },
  // other colors
};
export const COLOR_GENERATED_BG_ACTIVE = {
  RED: {
    LIGHT: "--plt-red-bg-light-active",
    DARK: "--plt-red-bg-dark-active",
  },
  // other colors
};
export const COLOR_GENERATED_BG_FOCUS = {
  RED: {
    LIGHT: "--plt-red-bg-light-focus",
    DARK: "--plt-red-bg-dark-focus",
  },
  // other colors
};
```

### Border

Generated file: [`app/constants/color/generatedBorder.ts`](https://github.com/hahavenn/better/tree/main/app/constants/color/generatedBorder.ts)

How it is looks like:

```typescript
export const COLOR_GENERATED_BORDER_DEFAULT = {
  RED: {
    LIGHT: "--plt-red-border-light-default",
    DARK: "--plt-red-border-dark-default",
  },
  // other colors
};
export const COLOR_GENERATED_BORDER_HOVER = {
  RED: {
    LIGHT: "--plt-red-border-light-hover",
    DARK: "--plt-red-border-dark-hover",
  },
  // other colors
};
export const COLOR_GENERATED_BORDER_ACTIVE = {
  RED: {
    LIGHT: "--plt-red-border-light-active",
    DARK: "--plt-red-border-dark-active",
  },
  // other colors
};
export const COLOR_GENERATED_BORDER_FOCUS = {
  RED: {
    LIGHT: "--plt-red-border-light-focus",
    DARK: "--plt-red-border-dark-focus",
  },
  // other colors
};
```

### Fill

Generated file: [`app/constants/color/generatedFill.ts`](https://github.com/hahavenn/better/tree/main/app/constants/color/generatedFill.ts)

How it is looks like:

```typescript
export const COLOR_GENERATED_FILL_DEFAULT = {
  RED: {
    LIGHT: "--plt-red-fill-light-default",
    DARK: "--plt-red-fill-dark-default",
  },
  // other colors
};
export const COLOR_GENERATED_FILL_HOVER = {
  RED: {
    LIGHT: "--plt-red-fill-light-hover",
    DARK: "--plt-red-fill-dark-hover",
  },
  // other colors
};
export const COLOR_GENERATED_FILL_ACTIVE = {
  RED: {
    LIGHT: "--plt-red-fill-light-active",
    DARK: "--plt-red-fill-dark-active",
  },
  // other colors
};
export const COLOR_GENERATED_FILL_FOCUS = {
  RED: {
    LIGHT: "--plt-red-fill-light-focus",
    DARK: "--plt-red-fill-dark-focus",
  },
  // other colors
};
```

### Text

Generated file: [`app/constants/color/generatedText.ts`](https://github.com/hahavenn/better/tree/main/app/constants/color/generatedText.ts)

How it is looks like:

```typescript
export const COLOR_GENERATED_TEXT_DEFAULT = {
  RED: {
    LIGHT: "--plt-red-text-light-default",
    DARK: "--plt-red-text-dark-default",
  },
  // other colors
};
export const COLOR_GENERATED_TEXT_HOVER = {
  RED: {
    LIGHT: "--plt-red-text-light-hover",
    DARK: "--plt-red-text-dark-hover",
  },
  // other colors
};
export const COLOR_GENERATED_TEXT_ACTIVE = {
  RED: {
    LIGHT: "--plt-red-text-light-active",
    DARK: "--plt-red-text-dark-active",
  },
  // other colors
};
export const COLOR_GENERATED_TEXT_FOCUS = {
  RED: {
    LIGHT: "--plt-red-text-light-focus",
    DARK: "--plt-red-text-dark-focus",
  },
  // other colors
};
```
