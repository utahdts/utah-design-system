import { notNull } from './notNull';

/**
 * Makes sure all elements in an array are neither null nor undefined (for type safety)
 * You should be pretty confident that things can't be null or undefined before calling this
 * @template T
 * @param {T[] | null | undefined} array
 * @param {string} errorMessage
 * @returns {NonNullable<T>[]}
 */
export function notNullArray(array, errorMessage) {
  if (array === null || array === undefined) {
    throw new Error(errorMessage);
  }
  return array.map((value) => notNull(value, errorMessage));
}
