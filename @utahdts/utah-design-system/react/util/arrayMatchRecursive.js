import identity from 'lodash/identity';

/**
 * Tests if an object or any of its children pass a custom match test.
 *
 * @param object
 * @param object.object the object in which to search for a match AND check its children if they exist
 * @param object.arrayField which field is the "children" array
 * @param object.isMatchFunc the object and each child will be passed to this function to test for truthiness
 * @returns true if the object or any of its "children" pass the isMatchFunc test
 */
function arrayMatchRecursive({ object, arrayField, isMatchFunc }) {
  return !!(
    object?.[arrayField]?.filter(identity)
      ?.some((arrayItem) => isMatchFunc(arrayItem) || arrayMatchRecursive(arrayItem))
  );
}

export default arrayMatchRecursive;
