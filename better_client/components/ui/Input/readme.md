# Input ui component

Input component for ui

> `<textarea>` doesn't implemented yet

## Usage

You can use predefined input preset:

```html
<UiInput :preset="'search'" />
```

Or you can use custom input:

```html
<UiInput
  :autocapitalize=""
  :autocomplete=""
  :button-type=""
  :icon=""
  :label=""
  :placeholder=""
  :type=""
/>
```

For prop types please see [types.ts](./types.ts)
