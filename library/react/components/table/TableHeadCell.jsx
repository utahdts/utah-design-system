import PropTypes from 'prop-types';
import { useContext } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableContext from './TableContext';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // The field related to this column. CellTemplate and RowTemplate can define a field. This field is used for determining sorting and filtering.
  recordFieldPath: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
  onClick: PropTypes.func,
  tableSortingFieldPaths: PropTypes.arrayOf(PropTypes.string),
};
const defaultProps = {
  children: null,
  className: null,
  recordFieldPath: null,
  innerRef: null,
  id: null,
  onClick: null,
  tableSortingFieldPaths: null,
};

function TableHeadCell({
  children,
  className,
  recordFieldPath,
  innerRef,
  id,
  onClick,
  tableSortingFieldPaths,
  ...rest
}) {
  const { setState, state: { currentSortingOrderIsDefault, sortingRules, tableSortingFieldPath } } = useContext(TableContext);
  return (
    <th
      className={joinClassNames(
        'table-header',
        className,
        (sortingRules[recordFieldPath] || tableSortingFieldPaths) && 'table-header--sortable',
        (recordFieldPath !== null && tableSortingFieldPath === recordFieldPath) && 'table-header--sorted',
        (recordFieldPath !== null && tableSortingFieldPath === recordFieldPath) && (
          currentSortingOrderIsDefault
            ? 'table-header--sort-default-order'
            : 'table-header--sort-opposite-order'
        )
      )}
      id={id}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else if (tableSortingFieldPath === recordFieldPath) {
          setState((draftState) => {
            draftState.currentSortingOrderIsDefault = !draftState.currentSortingOrderIsDefault;
          });
        } else if (sortingRules[recordFieldPath] || tableSortingFieldPaths) {
          setState((draftState) => {
            // still need fieldPath to identify which head cell this is, but tableSortingFieldPaths determines sorting
            draftState.tableSortingFieldPath = recordFieldPath;
            draftState.tableSortingFieldPaths = tableSortingFieldPaths;
            draftState.currentSortingOrderIsDefault = true;
          });
        }
      }}
      ref={innerRef}
      {...rest}
    >
      {children}
    </th>
  );
}

TableHeadCell.propTypes = propTypes;
TableHeadCell.defaultProps = defaultProps;

export default TableHeadCell;
