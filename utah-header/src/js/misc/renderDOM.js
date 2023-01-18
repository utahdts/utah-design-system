// @ts-check

import isString from './isString';

/**
 * Render a DOM from a string and return just the DOM child node
 * or HTMLCollection if there is more than one Node rendered
 * @param {string} str - HTML string to become rendered DOM
 * @returns {HTMLCollection | Element}
 */
export function renderDOM(str) {
  const domParser = new DOMParser();
  const rendered = /** @type {Document} */ (isString(str) ? domParser.parseFromString(str, 'text/html') : str);

  const firstChild = (
    rendered.body.children.length > 1
      ? rendered.body.children
      : rendered.body.children.item(0)
  );
  if (!firstChild) {
    // eslint-disable-next-line no-console
    console.error(str);
    throw new Error('renderDOM: nothing rendered');
  }
  return firstChild;
}

/**
 * Pull first element out of a collection if a collection was rendered
 *
 * @param {string} str
 * @returns {HTMLElement}
 */
export function renderDOMSingle(str) {
  const dom = renderDOM(str);
  if (dom instanceof HTMLCollection && dom.length > 1) {
    throw new Error('renderDOMSingle: must render a single element');
  }
  /** @type HTMLElement | null */
  const firstChild = /** @type HTMLElement | null */ (dom instanceof HTMLCollection ? dom[0] : dom);
  if (!firstChild) {
    // eslint-disable-next-line no-console
    console.error(str);
    throw new Error('renderDOMSingle: nothing rendered');
  }
  return firstChild;
}
