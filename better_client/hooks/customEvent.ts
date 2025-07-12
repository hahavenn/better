export type CustomEventListener<EventDetail> = (
  detail: CustomEvent<EventDetail>
) => void;

export default function useCustomEvent<EventDetail>(customEvent: string) {
  /** start listen to CustomEvent */
  function listen(listener: CustomEventListener<EventDetail>) {
    window.addEventListener(customEvent, (event: Event) => {
      if (event instanceof CustomEvent) {
        listener(event as CustomEvent<EventDetail>);
      }
    });
  }

  /** dispatch CustomEvent */
  function dispatch(detail: EventDetail) {
    if (import.meta.dev)
      console.debug(
        `custom event [${customEvent}] dispatched with detail`,
        detail
      );

    window.dispatchEvent(
      new CustomEvent<EventDetail>(customEvent, {
        detail,
      })
    );
  }

  /** remove CustomEvent listener */
  function remove(listener: (...args: any) => void) {
    window.removeEventListener(customEvent, listener);
  }

  return {
    listen,
    dispatch,
    remove,
  };
}
