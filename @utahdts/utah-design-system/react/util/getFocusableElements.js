/**
 * Based on the list from https://api.jqueryui.com/tabbable-selector/
 * Used to get a list of focusable elements within a modal component
 * @param {HTMLDialogElement} element
 * @returns {HTMLElement[]}
 */
export function getFocusableElements(element) {
  // @ts-expect-error Element vs HTMLElement... why?!?!?!
  return [
    ...element.querySelectorAll('a[href], area[href], button, input, textarea, select, object, [tabindex]:not([tabindex="-1"])'),
  ].filter((item) => !item.hasAttribute('disabled'));
}
