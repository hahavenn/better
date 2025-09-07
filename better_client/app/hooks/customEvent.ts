export type CustomEventListener<EventDetail> = (
  detail: CustomEvent<EventDetail>
) => void;

/**
 * Hook to work with custom events
 *
 * @param customEvent string name of custom event
 *
 * @returns `listen` function to add listener for custom event with options
 * @returns `dispatch` function to dispatch custom event with detail data
 * @returns `remove` function to remove saved listener from custom event
 *
 * ------
 *
 * @example
 * ```typescript
 * const { listen, dispatch, remove } = useCustomEvent("my_custom_event");
 *
 * // add listener for event
 * listen(() => {
 *   console.log("event listener")
 * }, {
 *   // listener options
 * })
 *
 * // dispatch event (for any action)
 * dispatch({
 *   // event data to be handled
 * })
 *
 * // remove listener
 * remove()
 * ```
 */
export default function useCustomEvent<EventDetail>(customEvent: string) {
  let eventListener: ((...args: any) => void) | null = null;

  function listen(
    listener: CustomEventListener<EventDetail>,
    options?: EventListenerOptions
  ) {
    // save listener for further remove
    eventListener = listener;

    window.addEventListener(
      customEvent,
      (event: Event) => {
        if (event instanceof CustomEvent) {
          listener(event as CustomEvent<EventDetail>);
        }
      },
      options
    );
  }

  function dispatch(detail?: EventDetail) {
    if (import.meta.dev) {
      console.debug(
        `custom event [${customEvent}] dispatched with detail`,
        detail
      );
    }

    window.dispatchEvent(
      new CustomEvent<EventDetail>(customEvent, {
        detail,
      })
    );
  }

  function remove() {
    if (eventListener) window.removeEventListener(customEvent, eventListener);
  }

  return {
    /** start listen to CustomEvent */
    listen,
    /** dispatch CustomEvent */
    dispatch,
    /** remove CustomEvent listener */
    remove,
  };
}
