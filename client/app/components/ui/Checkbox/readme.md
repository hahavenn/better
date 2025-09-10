# Checkbox

This component is used to check values with additional left/right text relative to checkbox

## Usage

```html
<UiCheckbox
  v-model="checkbox"
  :ariaLabel="'Test'"
  :palette="'GREEN'"
  :label="'label_text'"
  :labelAlign="'left'"
/>
```

```typescript
const checkbox = ref(false);
watch(checkbox, (v) => console.log("checkbox", v));
```

`checkbox` is bound value to checked state inside `<UiCheckbox>`

## Todo

- Disabled state with props.disabled
