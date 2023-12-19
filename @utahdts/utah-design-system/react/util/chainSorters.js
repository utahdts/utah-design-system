/**
 * Oftentimes you want to sort by multiple levels so that if the first level of sorting results in an equals result then compare the next level
 * @param {((a: any, b: any, ...rest: any[]) => number)[]} sorters sorter funcs in sort order; ie (a, b) => a - b
 * @param {any} [sorterParams] can add extra parameters to pass in to each sorter; these are spread in to the sorter
 * @returns {(a: any, b: any) => number} func that takes a & b parameters and if the comparison result is zero then calls the next sorter in the array
 */
export function chainSorters(sorters, ...sorterParams) {
  return (
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
}
