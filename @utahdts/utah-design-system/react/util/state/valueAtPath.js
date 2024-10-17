import { split } from 'lodash';

/**
 * @template ObjectT
 * @template ValueT
 * @param {object} param
 * @param {ObjectT | null} param.object
 * @param {string} param.path
 * @returns {ValueT}
 */
export function valueAtPath({ object, path }) {
  // eslint-disable-next-line jsdoc/no-undefined-types
  return /** @type {ValueT} */ (
    /** @type {any} */ (
      split(path, '.').reduce(
        (obj, field) => (
          (field && obj)
            // @ts-expect-error just go ahead and give it a try...
            ? obj[field]
            : obj
        ),
        object
      )
    )
  );
}
