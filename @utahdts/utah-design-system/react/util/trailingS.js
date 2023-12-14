/**
 * returns an 's' if the number is plural
 * @param {number} value
 * @returns {string}
 */
export default function trailingS(value) {
  return value >= 2 ? 's' : '';
}
