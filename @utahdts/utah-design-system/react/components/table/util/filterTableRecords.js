/**
 * @typedef {import('@utahdts/utah-design-system').TableFilterFunction} TableFilterFunction
 * @typedef {import('@utahdts/utah-design-system').TableRecord} TableRecord
 * @typedef {import('@utahdts/utah-design-system').TableRecordForFiltering} TableRecordForFiltering
 */

/**
 * convert a table record in to a filtering record that has the record and each filterable field formatted for filtering
 * @param {TableRecordForFiltering[]} records the data records in a table that are being filtered
 * @param {Record<string, TableFilterFunction>} filterRules The current filter values and settings
 * @returns {TableRecord[]}
 */
export function filterTableRecords(records, filterRules) {
  return records.filter((recordData) => (
    Object.entries(recordData.filterFields)
      .every(([filterField, recordValue]) => filterRules[filterField]?.(recordValue))
  ))
    .map((recordData) => recordData.record);
}
