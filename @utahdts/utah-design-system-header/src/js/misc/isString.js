/**
 * @param {any} s candidate for being a string
 * @returns {boolean} true if javascript thinks `s` is a string
 */
export default function isString(s) {
  return typeof s === 'string' || s instanceof String;
}
