/**
 * @template ValueFromRangesT
 * @param {number} value the value to see what range it is in
 * @param {{minValue: number, returnValue: ValueFromRangesT}[]} ranges must be sorted so it finds the first one for which the value is largest
 * @param {NonNullable<ValueFromRangesT>} defaultValue value if not found... sometimes this isn't possible, but define it anyways, typing ftw!
 * @returns {NonNullable<ValueFromRangesT>}
 */
export function valueFromRanges(value, ranges, defaultValue) {
  return ranges.find((range) => range.minValue <= value)?.returnValue || defaultValue;
}
