// @ts-check

/**
 * @param {Element} element
 * @param {HTMLCollection | Node} child
 */
export default function appendChildAll(element, child) {
  if (child) {
    if (child instanceof HTMLCollection) {
      while (child.length > 0) {
        element.appendChild(child[0]);
      }
    } else if (child instanceof Node) {
      element.appendChild(child);
    } else {
      // eslint-disable-next-line no-console
      console.error(child);
      throw new Error('appendChildAll: Unknown child element');
    }
  }
}
