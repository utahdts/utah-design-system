// @ts-check
import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableContext from './util/TableContext';

const propTypes = {
  // if this header cell is "sortable", the children will be wrapped in a <button>, so be careful!
  children: PropTypes.node,
  className: PropTypes.string,
  // The field related to this column. CellTemplate and RowTemplate can define a field. This field is used for determining sorting and filtering.
  id: PropTypes.string,
  innerRef: RefShape,
  onClick: PropTypes.func,
  recordFieldPath: PropTypes.string,
  /*
    from MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope
    row: The header relates to all cells of the row it belongs to.
    col: The header relates to all cells of the column it belongs to.
    rowgroup: The header belongs to a rowgroup and relates to all of its cells.
    colgroup: The header belongs to a colgroup and relates to all of its cells.
  */
  scope: PropTypes.oneOf(['row', 'col', 'rowgroup', 'colgroup']),
  tableSortingFieldPaths: PropTypes.arrayOf(PropTypes.string),
};
const defaultProps = {
  children: null,
  className: null,
  recordFieldPath: null,
  innerRef: null,
  id: null,
  onClick: null,
  scope: null,
  tableSortingFieldPaths: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.id]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {((e: Event) => {}) | null} [props.onClick]
 * @param {string | null} [props.recordFieldPath]
 * @param {'row' | 'col' | 'rowgroup' | 'colgroup' | null} [props.scope]
 * @param {string[] | null} [props.tableSortingFieldPaths]
 * @returns {JSX.Element}
 */
function TableHeadCell({
  children = null,
  className = null,
  recordFieldPath = null,
  innerRef = null,
  id = null,
  onClick = null,
  scope = null,
  tableSortingFieldPaths = null,
  ...rest
}) {
  const { setState, state: { currentSortingOrderIsDefault, sortingRules, tableSortingFieldPath } } = useContext(TableContext);
  const mySortingRules = sortingRules && (tableSortingFieldPaths || [recordFieldPath]).map((sortingRule) => sortingRules[sortingRule ?? '']);
  const isSortable = !!(sortingRules[recordFieldPath ?? ''] || tableSortingFieldPaths?.length);

  const onClickCallback = useCallback(
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
          draftState.tableSortingFieldPath = recordFieldPath;
          draftState.tableSortingFieldPaths = tableSortingFieldPaths;
          draftState.currentSortingOrderIsDefault = true;
        });
      }
    },
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

TableHeadCell.propTypes = propTypes;
TableHeadCell.defaultProps = defaultProps;

export default TableHeadCell;
