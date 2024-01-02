/**
 * https://docs.joshuatz.com/cheatsheets/js/jsdoc/#non-null-assertion-in-jsdoc
 * Exclude in JSDoc removes a type from another type. The returned `T` no longer has `null` nor `undefined` in its type
 * @template T
 * @param {T} value
 * @param {string} errorMessage
 * @returns {NonNullable<T>}
 */
export function notNull(value, errorMessage) {
  if (value === null || value === undefined) {
    throw new Error(errorMessage);
  }
  return value;
}
