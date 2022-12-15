import useStateEffect from '../../hooks/useStateEffect';

/**
 * companion to <Pagination>, hook for slicing a list based on the current page number
 *
 * @param {list} array list of items
 * @param {pageIndex} number current page index (0-based)
 * @param {itemsPerPage} number how many items are on each page
 * @returns new list starting at the given page number
 */
export default function usePaginatedList({ list, pageIndex, itemsPerPage }) {
  const [paginatedList] = useStateEffect({
    calculateValueFn: () => {
      const totalPages = Math.ceil(list.length / itemsPerPage);

      const startIndex = totalPages ? Math.max(Math.min(totalPages - 1, pageIndex) * itemsPerPage) : 0;
      const endIndex = startIndex + itemsPerPage;

      return list.slice(startIndex, endIndex);
    },
    dependencyList: [list, pageIndex, itemsPerPage],
  });

  return paginatedList;
}
