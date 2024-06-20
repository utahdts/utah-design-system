import { identity } from 'lodash';
import React, { useCallback, useContext } from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TableContext } from './util/TableContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children] if this header cell is "sortable", the children will be wrapped in a <button>, so be careful!
 * @param {string} [props.className]
 * @param {string} [props.id] field related to this column. CellTemplate and RowTemplate can define a field. used for sorting and filtering.
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {((e: React.MouseEvent<HTMLElement>) => {})} [props.onClick]
 * @param {string} [props.recordFieldPath]
 * @param {'row' | 'col' | 'rowgroup' | 'colgroup'} [props.scope] MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope
 *  row: The header relates to all cells of the row it belongs to.
 *  col: The header relates to all cells of the column it belongs to.
 *  rowgroup: The header belongs to a rowgroup and relates to all of its cells.
 *  colgroup: The header belongs to a colgroup and relates to all of its cells.
 * @param {string[]} [props.tableSortingFieldPaths]
 * @returns {import('react').JSX.Element}
 */
export function TableHeadCell({
  children,
  className,
  id,
  innerRef,
  onClick,
  recordFieldPath,
  scope,
  tableSortingFieldPaths,
  ...rest
}) {
  const { setState, state: { currentSortingOrderIsDefault, sortingRules, tableSortingFieldPath } } = useContext(TableContext);
  const mySortingRules = sortingRules && (tableSortingFieldPaths || [recordFieldPath]).map((sortingRule) => sortingRules[sortingRule ?? '']);
  const isSortable = !!(sortingRules[recordFieldPath ?? ''] || tableSortingFieldPaths?.length);

  const onClickCallback = useCallback(
    /** @type {import('react').MouseEventHandler<HTMLElement>} */(
      (e) => {
        e.stopPropagation();
        if (onClick) {
          onClick(e);
        } else if (tableSortingFieldPath === recordFieldPath) {
          setState((draftState) => {
            draftState.currentSortingOrderIsDefault = !draftState.currentSortingOrderIsDefault;
          });
        } else if (isSortable) {
          setState((draftState) => {
            // still need fieldPath to identify which head cell this is, but tableSortingFieldPaths determines sorting
            draftState.tableSortingFieldPath = recordFieldPath ?? null;
            draftState.tableSortingFieldPaths = tableSortingFieldPaths ?? null;
            draftState.currentSortingOrderIsDefault = true;
          });
        }
      }
    ),
    [isSortable, onClick, recordFieldPath, setState, tableSortingFieldPath, tableSortingFieldPaths]
  );

  const isAscending = (!!mySortingRules?.[0]?.defaultIsAscending === !!currentSortingOrderIsDefault);
  const isCurrentSortingField = recordFieldPath !== null && tableSortingFieldPath === recordFieldPath;

  return (
    <th
      aria-sort={(isCurrentSortingField && isSortable && (isAscending ? 'ascending' : 'descending')) || undefined}
      className={joinClassNames(
        'table-header__cell',
        className,
        isSortable && 'table-header--sortable',
        isCurrentSortingField && 'table-header--sorted',
        isCurrentSortingField && ((isAscending) ? 'table-header__cell--sort-ascending' : 'table-header__cell--sort-descending')
      )}
      id={id ?? undefined}
      onClick={onClickCallback}
      ref={innerRef}
      scope={scope ?? undefined}
      {...rest}
    >
      {
        isSortable
          ? (
            <button
              onClick={onClickCallback}
              type="button"
            >
              {
                isCurrentSortingField
                  ? (
                    <span
                      className="visually-hidden"
                    >
                      Currently sorted by {
                        mySortingRules?.filter(identity)
                          ?.map((sortingRule) => {
                            const isRuleAscending = (!!sortingRule?.defaultIsAscending === !!currentSortingOrderIsDefault);
                            return `${sortingRule?.a11yLabel || ''} ${isRuleAscending ? 'ascending' : 'descending'}`;
                          }).join(', ')
                      }
                    </span>
                  )
                  : (
                    <span className="visually-hidden">Sort by {mySortingRules?.map((sortingRule) => sortingRule?.a11yLabel || '').join(', ')}</span>
                  )
              }
              <span aria-hidden="true">
                {children}
              </span>
            </button>
          )
          : children
      }
    </th>
  );
}
