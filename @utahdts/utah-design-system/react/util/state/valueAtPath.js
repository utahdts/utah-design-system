import { split } from 'lodash';

/**
 * @template ObjectT
 * @template ValueT
 * @param {Object} param
 * @param {ObjectT & Object.<string, any> | null} param.object
 * @param {string} param.path
 * @returns {ValueT}
 */
export default function valueAtPath({ object, path }) {
  return /** @type {ValueT} */ (
    /** @type {any} */ (split(path, '.').reduce((obj, field) => ((field && obj) ? obj[field] : obj), object))
  );
}
