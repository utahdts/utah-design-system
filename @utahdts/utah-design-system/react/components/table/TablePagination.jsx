import { useEffect } from 'react';
import { notNull } from '../../util/notNull';
import { Pagination } from '../navigation/pagination/Pagination';
import { useTableContext } from './hooks/useTableContext';

/**
 * @param {Object} props
 * @param {string} [props.ariaLabel]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {React.RefObject<HTMLDivElement | HTMLElement | null>} [props.innerRef]
 * @param {number} props.pageSize
 * @param {'div' | 'nav'} [props.wrapInElement]
 * @returns {JSX.Element}
 */
export function TablePagination({
  ariaLabel,
  className,
  id,
  innerRef,
  pageSize,
  wrapInElement,
  ...rest
}) {
  const { filteredData, setState, state } = useTableContext();

  // == pageSize == //
  useEffect(
    () => {
      setState((draftContext) => {
        if (!draftContext.pagination) {
          draftContext.pagination = {
            currentPageIndex: 0,
            pageSize,
          };
        }
        draftContext.pagination.pageSize = pageSize;
      });
      return () => {
        setState((draftContext) => {
          delete draftContext.pagination;
        });
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize]
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
      pageSize={pageSize}
      totalNumberItems={filteredData.length}
      value={state.pagination?.currentPageIndex ?? 0}
      wrapInElement={wrapInElement}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
