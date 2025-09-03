# Input ui component

Input component for ui

> `<textarea>` doesn't implemented yet

## Usage

You can use predefined input preset:

```html
<UiInput
  v-model="inputValue"
  :preset="'search'"
/>
```

Or you can use custom input:

```html
<UiInput
  v-model="inputValue"
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
