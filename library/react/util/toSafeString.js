// @ts-check

/**
 * @param {string | number | null | undefined} value 
 * @returns 
 */
export default function toSafeString(value) {
  return (!value && value !== 0) ? '' : `${value}`;
}
