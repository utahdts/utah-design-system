import { useMemo } from 'react';

/**
 * companion to <Pagination>, hook for slicing a list based on the current page number
 * @template ListT
 * @param {object} props
 * @param {ListT[]} props.list list of items
 * @param {number} props.pageIndex current page index (0-based)
 * @param {number} props.itemsPerPage how many items are on each page
 * @returns {ListT[]} new list starting at the given page number
 */
export function usePaginatedList({ list, pageIndex, itemsPerPage }) {
  return useMemo(
    () => {
      const totalPages = Math.ceil(list.length / itemsPerPage);

      const startIndex = totalPages ? Math.max(Math.min(totalPages - 1, pageIndex) * itemsPerPage) : 0;
      const endIndex = startIndex + itemsPerPage;

      return list.slice(startIndex, endIndex);
    },
    [list, pageIndex, itemsPerPage]
  );
}
