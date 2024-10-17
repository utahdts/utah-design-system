import { identity } from 'lodash';

/**
 * @typedef ObjectPathWithKey {
 *  @property {Record<string, any>} object the parent object that contains the searchKey
 *  @property {string} path "dot path" to this object from the root object (blank for self is root)
 *  @property {string} searchKey the searchKey that this object contains
 * }
 */

/**
 * search in an object and its children for keys. if found, return the path to the
 * object that has the key.
 * @param {Record<string, any> | any[]} object the object in to which to search
 * @param {string[]} searchKeys the keys for which to search in the object and its children
 * @param {string} [path] the current path to the given object
 * @returns {ObjectPathWithKey[]} the objects with the key
 */
export function objectsPathsWithKeys(object, searchKeys, path = '') {
  /** @type {ObjectPathWithKey[]} */
  const foundObjects = [];
  searchKeys.forEach((searchKey) => {
    // don't traverse into DOM land
    if (object && typeof object === 'object' && !(object instanceof window.Element)) {
      // @ts-expect-error searchKey is fine to check here
      if (object[searchKey] !== undefined) {
        foundObjects.push({ object, path, searchKey });
      }

      Object.entries(object)
        // pull out just the object values (skip primitives)
        .filter(([, value]) => value instanceof Object)
        // check if any of the children are matches
        .forEach(([key, value]) => (
          foundObjects.push(
            ...objectsPathsWithKeys(value, [searchKey], [path, `${key}`].filter(identity).join('.'))
          )
        ));
    }
  });

  return foundObjects;
}
