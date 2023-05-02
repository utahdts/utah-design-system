// @ts-check

/**
 *
 * @typedef {(value: string) => boolean} TableFilterFunction
 *
 * For TableFilterX components, these are the options they can store in the Table context
 * to describe how they function.
 * @typedef TableFilterOptions {
 *  @property {boolean} exactMatch - The entered filter value is match exactly with the record data (cased to lower)
 * }
 *
 * The filter's current value in the TableContext
 * @typedef TableFilterValue {
 *  @property {boolean} exactMatch
 *  @property {string} value
 * }
 *
 * @typedef {Object.<string, any>} TableRecord
 *
 * @typedef TableRecordForFiltering {
 *  @property {Object.<string, any>} record
 *  @property {Object.<string, string>} filterFields
 * }
 */

// without this export, `@typedef import` reports this file 'is not a module'... (눈_눈)
export default false;
