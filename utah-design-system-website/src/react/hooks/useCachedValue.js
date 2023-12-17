import { setValueAtPath, valueAtPath } from '@utahdts/utah-design-system';

const GLOBAL_CACHES = {};

/**
 * given a array as a set of parameters, that in that particular order will always produce the same result,
 * return the known value for that array set or call a valueFunction to determine the value to cache and return it
 *
 * @template VALUE_TYPE
 * @template CACHED_VALUE_TYPE must be a type that can be used as a key in an object
 * @param {string} cacheId which cache to use, so that the same cachedValueSet can have different values based on the cache
 * @param {CACHED_VALUE_TYPE[]} cachedValueSet the values that in this particular order will always render the same result
 * @param {(params: CACHED_VALUE_TYPE[]) => VALUE_TYPE} valueFunction the function that deterministically retrieves a value given a value set
 * @returns {VALUE_TYPE} returns the determined value for the given cachedValueSet
 */
export function useCachedValue(cacheId, cachedValueSet, valueFunction) {
  const path = `${cacheId}.${cachedValueSet.join('.')}`;
  let value = /** @type {VALUE_TYPE} */ (valueAtPath({ object: caches, path }));
  if (!value) {
    value = valueFunction(cachedValueSet);
    setValueAtPath({ object: GLOBAL_CACHES, path, value });
  }
  return value;
}
