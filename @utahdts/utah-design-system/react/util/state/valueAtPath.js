// @ts-check
import split from 'lodash/split';

/**
 * @template ObjectT
 * @template ValueT
 * @param {Object} param
 * @param {ObjectT} param.object
 * @param {string} param.path
 * @returns {ValueT}
 */
export default function valueAtPath({ object, path }) {
  return /** @type {ValueT} */ (
    /** @type {any} */ (split(path, '.').reduce((obj, field) => ((field && obj) ? obj[field] : obj), object))
  );
}
