import { isString } from './isString';

/**
 * Render a DOM from a string and return just the DOM child node
 * or HTMLCollection if there is more than one Node rendered
 * @param {string} str - HTML string to become rendered DOM
 * @returns {HTMLCollection | Element}
 */
function renderDOM(str) {
  const domParser = new DOMParser();

  /** @type {HTMLCollection | Element} */
  let result;
  if (isString(str)) {
    const rendered = /** @type {Document} */ (isString(str) ? domParser.parseFromString(str, 'text/html') : str);

    const maybeResult = (
      rendered.body.children.length > 1
        ? rendered.body.children
        : rendered.body.children.item(0)
    );
    if (!maybeResult) {
      // eslint-disable-next-line no-console
      console.error(str);
      throw new Error('renderDOM: nothing rendered');
    }
    result = maybeResult;
  } else if (/** @type {unknown} */ (str) instanceof Element) {
    result = str;
  } else if (!str) {
    throw new Error('renderDOM: falsy string passed; cannot render nothing');
  } else {
    // eslint-disable-next-line no-console
    console.error(str);
    throw new Error(`renderDOM: str is not a string nor a DOM Element : '${str}'`);
  }
  return result;
}

/**
 * Pull first element out of a collection if a collection was rendered
 * @param {string | HTMLElement} str
 * @returns {HTMLElement}
 */
export function renderDOMSingle(str) {
  const dom = typeof str === 'string' ? renderDOM(str) : str;
  if (dom instanceof HTMLCollection && dom.length > 1) {
    throw new Error('renderDOMSingle: must render a single element');
  }
  /** @type {HTMLElement | null} */
  const firstChild = /** @type {HTMLElement | null} */ (dom instanceof HTMLCollection ? dom[0] : dom);
  if (!firstChild) {
    // eslint-disable-next-line no-console
    console.error(str);
    throw new Error('renderDOMSingle: nothing rendered');
  }
  return firstChild;
}
