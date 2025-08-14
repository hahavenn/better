# Accordion

This component is used for add behavior of "accordion" to content (expand and collapse content inside)

## Usage

Define html markup

> Note button for controlling accordion placed outside for better UI

```html
<UiAccordion
  v-show="expanded"
  v-model="expanded"
  ref="accordionRef"
  :label="'accordion for something'"
  :accordionId="`some_unique_${accordionId}`"
>
  <!-- Some content -->
</UiAccordion>

<button
  v-if="isExpandable"
  @click="expanded = !expanded"
  ref="expandBtnRef"
  type="button"
></button>
```

```typescript
import type { UiAccordionType } from "~/components/ui/Accordion/types";
import useAccordion from "~/components/ui/Accordion/useAccordion";

const UiAccordion = defineAsyncComponent(
  () => import("~/components/ui/Accordion/UiAccordion.vue")
);

/*
  Used for conditional rendering button.
  If button will be unmounted - useAccordion will call stop functions for clear underlying watchers
*/
const isExpandable = computed(() => /* some condition */)

const accordionRef = useTemplateRef<UiAccordionType>("accordion");
const stepExpandBtnRef = useTemplateRef<HTMLButtonElement>("stepExpandBtnRef");
const { expanded } = useAccordion(accordionRef, stepExpandBtnRef);
```
