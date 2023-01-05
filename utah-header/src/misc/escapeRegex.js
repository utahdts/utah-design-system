// TODO: review this file for inclusion
/**
 * Given a string, escape any characters that are reserved for regex
 * @param {string} str - The string to escape
 * @returns {string}
 */
export default function escapeRegex(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
