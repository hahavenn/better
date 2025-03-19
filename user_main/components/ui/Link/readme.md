# UiLink

This component is used for using link with pre-defined config and a11y performance

## Props

Props are defined in [types.ts](types.ts) file

## Links types

Some links on site can be re-usable. For better performance these types were pre-defined and described in [types.ts](types.ts) file in `LinkTypes`

## Links presets

For corresponding link types defined presets are locates in [presets.ts](presets.ts) file

## Usage

```html
<template>
  <UiLink :type="'home'">
    <!-- link content goes here -->
  </UiLink>
</template>
```
