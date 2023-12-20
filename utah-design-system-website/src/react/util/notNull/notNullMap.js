/**
 * https://docs.joshuatz.com/cheatsheets/js/jsdoc/#non-null-assertion-in-jsdoc
 * Exclude in JSDoc removes a type from another type. The returned `T` no longer has `null` nor `undefined` in its type
 *
 * This function is not as nice as its cousin notNull() because it does not require a message
 * This function is nice to pass to a map function where you know FOR SURE that all the value are not null/undefined.
 * ie myValuesArray.filter(identity).map(notNullMap) so that the type system now knows that all the values are not null
 * @template T
 * @param {T} value
 * @returns {NonNullable<T>}
 */
export function notNullMap(value) {
  if (value === null || value === undefined) {
    throw new Error('notNullMap: value is null or undefined');
  }
  return value;
}
