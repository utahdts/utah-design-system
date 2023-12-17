/**
 * @param {Element} element
 * @param {boolean} isShown
 * @param {string} visibleClass
 * @param {string} hiddenClass
 */
export function showHideElement(element, isShown, visibleClass, hiddenClass) {
  if (isShown) {
    element.classList.remove(hiddenClass);
    element.classList.add(visibleClass);
  } else {
    element.classList.add(hiddenClass);
    element.classList.remove(visibleClass);
  }
}
