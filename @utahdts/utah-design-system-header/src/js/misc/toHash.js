/* eslint-disable no-bitwise */

/**
 * https://stackoverflow.com/a/8076436/1478933
 * @param {object | string} thing the thing to hash
 * @returns {number}
 */
export function toHash(thing) {
  let hash = 0;
  const string = JSON.stringify(thing);
  for (let i = 0; i < string.length; i += 1) {
    const code = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + code;

    // Convert to 32bit integer
    hash &= hash;
  }

  return hash;
}
