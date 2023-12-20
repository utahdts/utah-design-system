/**
 * @param {string | number | null | undefined} value
 * @returns {string}
 */
export function toSafeString(value) {
  return (!value && value !== 0) ? '' : `${value}`;
}
