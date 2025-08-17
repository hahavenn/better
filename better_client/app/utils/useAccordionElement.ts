type AccordionElementParams = {
  /** Accordion element */
  accordionEl: ReturnType<typeof useTemplateRef<HTMLElement>>;
  /** Id of accordion element for a11y */
  accordionId: string;
  /** Aria label of accordion element for a11y */
  ariaLabel: string;

  /** Max height of expanded accordion element in pixels */
  maxHeight?: number;

  /** Element that toggles accordion expanded state */
  expandToggleEl: ReturnType<typeof useTemplateRef<HTMLElement>>;

  /** Default state of accordion when initialize */
  expanded?: boolean;
};

/** Make element's behavior as accordion element */
export default function (params: AccordionElementParams) {
  const { accordionEl, accordionId, ariaLabel, maxHeight, expandToggleEl } =
    params;

  function setAccordionEl(expandState?: boolean) {
    const el = unrefElement(accordionEl);

    if (el === null || el === undefined) return;

    if (expandState === undefined) {
      el.style.overflow = "hidden";
      el.setAttribute("aria-label", ariaLabel);
      el.setAttribute("id", accordionId);
    } else {
      el.setAttribute("aria-hidden", String(expandState));

      el.style.maxHeight = expandState
        ? `${maxHeight ?? el.scrollHeight}px`
        : "0px";
    }
  }
  function setExpandToggleEl(expandState?: boolean) {
    const el = unrefElement(expandToggleEl);

    if (el === null || el === undefined) return;

    if (expandState) {
      el.setAttribute("aria-expanded", String(expandState));
    } else {
      el.setAttribute("aria-controls", accordionId);
    }
  }

  const expanded = ref(Boolean(params.expanded));
  watch(
    expanded,
    (v) => {
      setAccordionEl(v);
      setExpandToggleEl(v);
    },
    { immediate: true }
  );

  /* watch for elements and init their behavior when elements are mounted */
  watch(accordionEl, (v) => v !== null && setAccordionEl(expanded.value));
  watch(expandToggleEl, (v) => v !== null && setExpandToggleEl(expanded.value));

  /* init setting */
  setAccordionEl();
  setExpandToggleEl();

  return {
    /**
     * Reactive expand state of accordion element.
     * Can be used to manually set set needed state
     */
    expanded,
  };
}
