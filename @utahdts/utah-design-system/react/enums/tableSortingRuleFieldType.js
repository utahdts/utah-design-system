// @ts-check
/** @typedef {import('../jsDocTypes').TableSortingRuleFieldType} TableSortingRuleFieldType */

/** @enum {TableSortingRuleFieldType} */
export default {
  // compares dates as Date() objects
  // dates represented by an ISO string should use the STRING enum value
  DATE: /** @type {TableSortingRuleFieldType} */ ('date'),
  // compares numbers (does do Number(fieldValue)) conversion so it is safe to pass strings as numbers)
  NUMBER: /** @type {TableSortingRuleFieldType} */ ('number'),
  // does simple localeCompare() string comparison; is safe for null strings
  STRING: /** @type {TableSortingRuleFieldType} */ ('string'),
};
