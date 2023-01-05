// TODO: review this file for inclusion
/**
 * Replace an element in the DOM with a new tag name and also return the new element that was created.
 * @param {Node} target - The target to replace
 * @param {string} newTagName - The new tag name to create
 * @param {boolean} keepAttributes - Should the attributes of the old target be copied to the new?
 * @returns {Node}
 */
export default function replaceTag({ target, newTagName, keepAttributes = true } = {}) {
  const newElement = document.createElement(newTagName);
  while (target.firstChild) {
    newElement.appendChild(target.firstChild);
  }

  if (keepAttributes) {
    for (let i = target.attributes.length - 1; i >= 0; i -= 1) {
      newElement.attributes.setNamedItem(target.attributes[i].cloneNode());
    }
  }

  target.parentNode.replaceChild(newElement, target);

  return newElement;
}
