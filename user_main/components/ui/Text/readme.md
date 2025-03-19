# Text component

This component is used to display text, given via `<slot>`. It has already pre-defined text types for different use cases (a11y + styles)

Text component are created in [./components](./components/) directory and imported in [./components/index.ts](./components/index.ts) file.

## Props and types

`Props` and `text` types are defined in [types.ts](types.ts)

## Usage

Usage of component is simple:

```html
<TextUI
  :type="'link'"
  :fontSize="'m'"
  :padding="'var(--offset__3) var(--offset__2)'"
>
  ha_edu
</TextUI>
```

```typescript
import TextUI from "~/components/ui/Text/TextUI.vue";
```
