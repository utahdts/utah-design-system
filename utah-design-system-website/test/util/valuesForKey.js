import { isObject } from 'lodash';

/**
 * Recursively search an "object" for a key and return its value no matter at what level in the object's tree the value is found
 * @template ObjectT
 * @template ResultT
 * @param {ObjectT} obj hopefully an object, but can be anything
 * @param {string} key the matching key for which to search; if found, then return its value
 * @param {(item: any, obj: any) => boolean} [filterFunc] obj is "any" type because it is any nested type of the original object
 * @returns {ResultT[]}
 */
export function valuesForKey(obj, key, filterFunc) {
  const result = [];
  if (obj && isObject(obj)) {
    // @ts-expect-error <-- isObject() removes the case for which this error generates
    if (key in obj && (!filterFunc || filterFunc(obj[key], obj))) {
      // @ts-expect-error `key in obj` above checks that key does in fact exist in the object
      result.push(obj[key]);
    }
    Object.values(obj).forEach((value) => (
      valuesForKey(value, key, filterFunc).forEach((foundValue) => result.push(foundValue))
    ));
  }
  return result;
}
