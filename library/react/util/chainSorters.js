/**
 * Oftentimes you want to sort by multiple levels so that if the first level of sorting results in an equals result then compare the next level
 *
 * @param sorters ([func]) functions in sort application order that take an a & b parameter and return the comparison result; ie (a, b) => a - b
 * @param sorterParams (...) can add extra parameters to pass in to each sorter; these are spread in to the sorter
 * @return (func) function that takes a & b parameters and if the comparison result is zero then calls the next sorter in the array
 */
export default (sorters, ...sorterParams) => (
  // One Sorter to rule them all, One Sorter to find them,
  // One Sorter to bring them all, and in the darkness bind them,
  (a, b) => (
    (sorters || []).reduce(
      // loop through the sorters until a comparison gets a non-zero result
      (result, sorter) => (result === 0 ? sorter(a, b, ...sorterParams) : result),
      // default to zero/equals result
      0
    )
  )
);
