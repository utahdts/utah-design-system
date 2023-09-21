// @ts-check
/**
 * @typedef {import('../../../jsDocTypes').TableFilterValue} TableFilterValue
 * @typedef {import('../../../jsDocTypes').TableFilterFunction} TableFilterFunction
 */

/**
 * convert each filter in to a function that will validate that filter rule (value, exactMatch, etc)
 * @param {Object.<string, TableFilterValue>} filterValues the filters
 * @returns {Object.<string, TableFilterFunction>} a function for each filter key that takes a value and determines if it matches the filter
 */
export default function createTableFilterFunctions(filterValues) {
  return (
    Object.fromEntries(
      Object.entries(filterValues || {})
        .map(([filterKey, filterData]) => {
          let testFunc;

          if (filterData.exactMatch) {
            // exact match does not need to be split
            const filterString = filterData.value?.toLocaleLowerCase() || '';
            testFunc = (value) => !filterData.value || value === filterString;
          } else {
            // preformat filter values for optimization
            const filterStrings = (filterData.value || '').split(' ').map((s) => s.toLowerCase());
            testFunc = (value) => filterStrings.every((filterString) => !filterString || value.includes(filterString));
          }

          return [
            filterKey,
            // actual filter testing function to be called on each record for this field/filterKey
            testFunc,
          ];
        })
    )
  );
}
