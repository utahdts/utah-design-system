/**
 * A function used as a callback often needs to the triggering event
 * from triggering other events. Wrapping the function in this handleEvent function
 * automatically stops the event propagation. ie handleEvent(() => { ... do something ... })
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} func The function to run
 * @returns {import('react').MouseEventHandler<HTMLButtonElement>}
 */
export function handleEvent(func) {
  return (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    // react support
    if (e?.nativeEvent?.stopImmediatePropagation) {
      e.nativeEvent.stopImmediatePropagation();
    }

    func.call(e.target, e);
  };
}
