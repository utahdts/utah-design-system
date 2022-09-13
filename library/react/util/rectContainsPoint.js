/**
 * determines if a point is inclusively within a rectangle. helpful for checking if a click was on an element.
 *
 * @param rect ({top, bottom, left, right}) defines an area
 * @param point ({x, y}) defines a point
 */
export default (rect, point) => rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y;
