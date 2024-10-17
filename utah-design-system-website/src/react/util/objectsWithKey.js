/**
 * search in an object (including itself) for a key. if found, return the object that has the key.
 * includes searching the children of the object
 * @param {Record<string, any> | any[]} object the object in to which to search
 * @param {string} key the key for which to search in the object and its children
 * @returns {Record<string, any>[]} the objects with the key
 */
export function objectsWithKey(object, key) {
  /** @type {Record<string, any>[]} */
  const foundObjects = [];
  if (object && typeof object === 'object') {
    // @ts-expect-error if key does not work then it will be undefined and all is good; maybe should check 'in'
    if (object[key] !== undefined) {
      foundObjects.push(object);
    }

    (Array.isArray(object) ? object : Object.values(object))
      .filter((item) => item instanceof Object)
      .map((item) => objectsWithKey(item, key))
      .flat()
      .forEach((item) => foundObjects.push(item));
  }

  return foundObjects;
}
