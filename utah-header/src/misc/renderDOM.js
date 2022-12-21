/**
 * Render a DOM from a string and return just the DOM child node
 * or HTMLCollection if there is more than one Node rendered
 * @param {string} str - HTML string to become rendered DOM
 * @returns {ChildNode|HTMLCollection}
 */
export default function renderDOM(str) {
  const domParser = new DOMParser();
  const rendered = domParser.parseFromString(str, 'text/html');

  return (
    rendered.body.children.length > 1
      ? rendered.body.children
      : rendered.body.firstChild
  );
}
