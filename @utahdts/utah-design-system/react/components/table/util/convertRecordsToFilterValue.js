import { valueAtPath } from '../../../util/state/valueAtPath';
import { toSafeString } from '../../../util/toSafeString';

/**
 * @typedef {import('@utahdts/utah-design-system').TableFilterValue} TableFilterValue
 * @typedef {import('@utahdts/utah-design-system').TableRecord} TableRecord
 * @typedef {import('@utahdts/utah-design-system').TableRecordForFiltering} TableRecordForFiltering
 */

/**
 * convert a table record in to a filtering record that has the record and each filterable field formatted for filtering
 * @param {TableRecord[]} records the data records in a table that are being filtered
 * @param {Record<string, TableFilterValue>} filterValues The current filter values and settings
 * @returns {TableRecordForFiltering[]}
 */
export function convertRecordsToFilterValue(records, filterValues) {
  return records.map((record) => ({
    record,
    filterFields: (
      Object.fromEntries(
        Object.keys(filterValues || {})
          .map((filterFieldPath) => [
            filterFieldPath,
            toSafeString(valueAtPath({ object: record.record, path: filterFieldPath }))
              // lowercase so that uppercase isn't an issue
              ?.toLocaleLowerCase(),
          ])
      )
    ),
  }));
}
