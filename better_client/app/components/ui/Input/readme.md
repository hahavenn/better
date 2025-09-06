# Input ui component

Input component for ui

- [Usage](#usage)
- [Props](#props)
- [Exposed variables and methods](#exposed-variables-and-methods)
- [Todo](#todo)

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

## Props

For prop types please see [types.ts](./types.ts)

## Exposed variables and methods

Be sure that you defined template ref for UiInput component:

```html
<UiInput ref="uiInputRef" />
```

```typescript
const uiInputRef = useTemplateRef("uiInputRef");
```

- `focus()` you can focus UiInput
- `blur()` you can blur UiInput

## Todo

> `<textarea>` doesn't implemented yet
