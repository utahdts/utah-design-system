/**
 * recursively searches through an object for fields that match a custom function like when a menu is
 * searching if it or any of its children are selected.
 * @template T
 * @param {T[] | T} object the object on which to start searching
 * @param {string[]} recursiveFields which fields on the object should be "dug" in to recursively
 * @param {(o: T) => boolean} isMatchFunc the function to call on each child to see if it matches
 * @returns {boolean} true if the isMatchFunc is true for the root or any of its children
 */
export function findRecursive(object, recursiveFields, isMatchFunc) {
  /** @type {boolean} */
  let result = false;

  if (object) {
    if (Array.isArray(object)) {
      // try each item in the array separately
      result = object.some((o) => findRecursive(o, recursiveFields, isMatchFunc));
    } else {
      // does this object match?
      result = isMatchFunc(object);

      if (!result) {
        // object didn't match so try its children
        result = (
          !!recursiveFields
            // @ts-expect-error field is ok to reference in object
            ?.filter((field) => object[field])
            // @ts-expect-error field is ok to reference in object
            ?.some((field) => findRecursive(object[field], recursiveFields, isMatchFunc))
        );
      }
    }
  }

  return result;
}
