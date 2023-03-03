// @ts-check

/**
 * recursively searches through an object for fields that match a custom function like when a menu is
 * searching if it or any of its children are selected.
 *
 * @template T
 * @param {T[] | T} object the object on which to start searching
 * @param {string[]} recursiveFields which fields on the object should be "dug" in to recursively
 * @param {(o: T) => boolean} isMatchFunc the function to call on each child to see if it matches
 */
export default function findRecursive(object, recursiveFields, isMatchFunc) {
  // TODO: move to misc folder as own file and write jest tests for it
  // TODO: break out in to separate logic commands instead of a one-liner
  return (
    Array.isArray(object)
      // if it's an array, check each item
      ? object.some((o) => findRecursive(o, recursiveFields, isMatchFunc))
      : (
        // check if the current object matches
        isMatchFunc(object)
        // didn't match so now see if there are any children that would match
        || (
          recursiveFields
            // check if the field exists on the object
            .filter((field) => object[field])
            // recurse on the field to check for matches further down
            .some((field) => (
              Array.isArray(object[field])
                ? (object[field].some((childObject) => isMatchFunc(childObject) || findRecursive(childObject, recursiveFields, isMatchFunc)))
                : (isMatchFunc(object) || findRecursive(object, recursiveFields, isMatchFunc))
            ))
        )
      ));
}
