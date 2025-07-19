import type { ShallowRef } from "vue";
import type { UiAccordionType } from "./types";

export default function useAccordion(
  accordionRef: Readonly<ShallowRef<UiAccordionType | null>>,
  expandBtnRef: Readonly<ShallowRef<HTMLElement | null>>,
  initExpanded = false
) {
  const expanded = ref(initExpanded);

  watch([accordionRef, expandBtnRef], ([accNew, btnNew], [, btnOld]) => {
    // when both available - bind btn to accordion
    if (accNew !== null && btnNew !== null) {
      accNew.bindBtn(btnNew);
      return;
    }
    // when btn is unmounted - unbind bound watchers
    if (btnNew === null && btnOld !== null) {
      accordionRef.value?.unbindBtn();
    }
  });

  return {
    expanded,
  };
}
