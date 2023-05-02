// @ts-check

/**
 * @typedef {import('../../../jsDocTypes').TableFilterFunction} TableFilterFunction
 * @typedef {import('../../../jsDocTypes').TableRecord} TableRecord
 * @typedef {import('../../../jsDocTypes').TableRecordForFiltering} TableRecordForFiltering
 */

/**
 * convert a table record in to a filtering record that has the record and each filterable field formatted for filtering
 * @param {TableRecordForFiltering[]} records the data records in a table that are being filtered
 * @param {Object.<string, TableFilterFunction>} filterRules The current filter values and settings
 * @returns {TableRecord[]}
 */
export default function filterTableRecords(records, filterRules) {
  return records.filter((recordData) => (
    Object.entries(recordData.filterFields)
      .every(([filterField, recordValue]) => filterRules[filterField](recordValue))
  ))
    .map((recordData) => recordData.record);
}
