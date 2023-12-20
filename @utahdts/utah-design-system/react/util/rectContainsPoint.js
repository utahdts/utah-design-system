/**
 * determines if a point is inclusively within a rectangle. helpful for checking if a click was on an element.
 * @param {DOMRect} rect ({top, bottom, left, right}) defines an area
 * @param {{ x: number, y: number }} point ({x, y}) defines a point
 * @returns {boolean}
 */
export function rectContainsPoint(rect, point) {
  return rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y;
}
