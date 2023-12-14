/**
 * @param {string | number | null | undefined} value
 * @returns {string}
 */
export default function toSafeString(value) {
  return (!value && value !== 0) ? '' : `${value}`;
}
