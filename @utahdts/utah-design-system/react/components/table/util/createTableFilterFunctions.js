/**
 * @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValue} TableContextStateFilterValue
 * @typedef {import('@utahdts/utah-design-system').TableFilterFunction} TableFilterFunction
 */

import { parse } from 'date-fns';

/**
 * convert each filter in to a function that will validate that filter rule (value, exactMatch, etc)
 * @param {Record<string, TableContextStateFilterValue>} filterValues the filters
 * @returns {Record<string, TableFilterFunction>} a function for each filter key that takes a value and determines if it matches the filter
 */
export function createTableFilterFunctions(filterValues) {
  return (
    Object.fromEntries(
      Object.entries(filterValues || {})
        .map(([filterKey, filterData]) => {
          /** @type {TableFilterFunction} */
          let testFunc;

          if (filterData.options.exactMatch) {
            // == Exact Match == //
            if (filterData.options.isDateRange) {
              throw new Error(`Table Filter: exactMatch is a date range. A date range can not be an exact match: "${filterKey}"=>${filterData.value}`);
            }
            // exact match does not need to be split
            const filterDataValue = filterData.value;
            const filterTestValue = typeof filterDataValue === 'number' ? filterDataValue : filterDataValue?.toLocaleLowerCase() || '';
            testFunc = (value) => !filterData.value || value === filterTestValue;
          } else if (filterData.options.isDateRange) {
            // == Date Range == //
            if (typeof filterData.value === 'number') {
              throw new Error(`Table Filter: value is a number for a date Range. Date Range filtering must be a string value in the format of '{beginDate}~~separator~~{endDate}': "${filterKey}"=>${filterData.value}`);
            }
            // TODO: make these constants
            const dateFormat = filterData.options.dateRangeDateFormat || 'MM/dd/yyyyy';
            const [beginDate, endDate] = filterData.value.split('~~separator~~');
            const beginDateDate = beginDate ? parse(beginDate, dateFormat, new Date()) : null;
            const endDateDate = endDate ? parse(endDate, dateFormat, new Date()) : null;
            testFunc = (value) => {
              const valueDate = value && parse(value, dateFormat, new Date());
              return (
                !!valueDate
                && (!beginDateDate || valueDate.getTime() >= beginDateDate.getTime())
                && (!endDateDate || valueDate.getTime() <= endDateDate.getTime())
              );
            };
          } else {
            // == String Partials == //
            if (typeof filterData.value === 'number') {
              // eslint-disable-next-line no-console
              console.warn(`Table Filter: value is a number but is not an exact match. Non-exact-matching (partials/contains) only works with strings. Either use a string filter value or have set the 'exactMatch' property on the filter to be 'true': "${filterKey}"=>${filterData.value}`);
            }
            // preformat filter values for optimization (force a string for partial matching)
            const filterDataValue = `${filterData.value}`;
            const filterTestValues = (filterDataValue || '').split(' ').map((s) => s.toLowerCase());
            testFunc = (value) => filterTestValues.every((filterString) => !filterString || value.includes(filterString));
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
