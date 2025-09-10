# Input ui component

Input component for ui

- [Usage](#usage)
- [Props](#props)
- [Exposed variables and methods](#exposed-variables-and-methods)
- [Events](#events)
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

## Events

You can listen for different events on UiInput component

```html
<UiInput
  @submit=""
  @cancel=""
/>
```

- `submit` - when user click 'enter' key or button
- `cancel` - when user click 'esc' button

## Todo

> `<textarea>` doesn't implemented yet
