/**
 * This file should be used to setup Prototype functions,
 * and should be called once at App start to make the function available.
 */

/**
 * Append an HTMLCollection or Node to another Node
 * @param {HTMLCollection|Node} child - HTMLCollection or Node to append to another Node
 */
Node.prototype.appendChildAll = function appendChildAll(child) {
  if (child instanceof HTMLCollection) {
    while (child.length > 0) {
      this.appendChild(child[0]);
    }
  } else if (child instanceof Node) {
    this.appendChild(child);
  } else {
    console.error('Node.appendChildAll: Unknown child element!', child);
  }
};
