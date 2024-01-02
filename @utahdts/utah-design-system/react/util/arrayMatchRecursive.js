import { identity } from 'lodash';

/**
 * Tests if an object or any of its children pass a custom match test.
 * @param {object} param
 * @param {Record<string, any>} param.object the object in which to search for a match AND check its children if they exist
 * @param {string} param.arrayField which field is the "children" array
 * @param {(arrayItem: any) => boolean} param.isMatchFunc the object and each child will be passed to this function to test for truthiness
 * @returns {boolean} true if the object or any of its "children" pass the isMatchFunc test
 */
export function arrayMatchRecursive({ object, arrayField, isMatchFunc }) {
  return !!(
    object?.[arrayField]?.filter(identity)
      ?.some(
        /**
         * @param {any} arrayItem
         * @returns {boolean}
         */
        (arrayItem) => isMatchFunc(arrayItem) || arrayMatchRecursive(arrayItem)
      )
  );
}
