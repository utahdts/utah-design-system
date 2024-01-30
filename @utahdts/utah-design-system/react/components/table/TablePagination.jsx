import { useEffect } from 'react';
import { notNull } from '../../util/notNull';
import { Pagination } from '../navigation/pagination/Pagination';
import { useTableContext } from './hooks/useTableContext';

/**
 * @param {object} props
 * @param {string} [props.ariaLabel]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {import('react').RefObject<HTMLDivElement | HTMLElement | null>} [props.innerRef]
 * @param {number} props.itemsPerPage
 * @param {'div' | 'nav'} [props.wrapInElement]
 * @returns {import('react').JSX.Element}
 */
export function TablePagination({
  ariaLabel,
  className,
  id,
  innerRef,
  itemsPerPage,
  wrapInElement,
  ...rest
}) {
  const { filteredData, setState, state } = useTableContext();

  // == itemsPerPage == //
  useEffect(
    () => {
      setState((draftContext) => {
        if (!draftContext.pagination) {
          draftContext.pagination = {
            currentPageIndex: 0,
            itemsPerPage,
          };
        }
        draftContext.pagination.itemsPerPage = itemsPerPage;
      });
      return () => {
        setState((draftContext) => {
          delete draftContext.pagination;
        });
      };
    },
    [itemsPerPage]
  );

  return (
    <Pagination
      ariaLabel={ariaLabel}
      className={className}
      id={id}
      innerRef={innerRef}
      onChange={(newPageIndex) => (
        setState((draftContext) => {
          notNull(draftContext.pagination, 'TablePagination: onChange pagination').currentPageIndex = newPageIndex;
        })
      )}
      itemsPerPage={itemsPerPage}
      totalNumberItems={filteredData.length}
      value={state.pagination?.currentPageIndex ?? 0}
      wrapInElement={wrapInElement}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
