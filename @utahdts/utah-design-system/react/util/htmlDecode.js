// https://stackoverflow.com/a/34064434/1478933
/**
 * @param {string} input
 * @returns {string}
 */
export function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent ?? '';
}
