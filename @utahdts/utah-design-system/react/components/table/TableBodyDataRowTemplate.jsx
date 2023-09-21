// @ts-check
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableBodyDataRowContext from './TableBodyDataRowContext';

/**
 * @template TableDataT
 * @typedef {import('../../jsDocTypes').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

const propTypes = {
  // the TableBodyDataCellTemplates for the row
  children: PropTypes.node.isRequired,
  // className for the <TableRow>
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // ref to the <TableRow>
  innerRef: RefShape,
  // ({ e }) => { ... do something ... }
  onClick: PropTypes.func,
  // ({ e }) => { ... do something ... }
  onDoubleClick: PropTypes.func,
};
const defaultProps = {
  className: null,
  innerRef: null,
  onClick: null,
  onDoubleClick: null,
};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {((rowContextData: TableBodyDataRowContextValue<TableDataT>) => string) | string | null} [props.className]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: Event})) => void) | null} [props.onClick]
 * @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: Event})) => void) | null} [props.onDoubleClick]
 * @returns {JSX.Element}
 */
function TableBodyDataRowTemplate({
  children,
  className = null,
  innerRef = null,
  onClick = null,
  onDoubleClick = null,
  ...rest
}) {
  // record, recordIndex, records
  const rowContextData = useContext(TableBodyDataRowContext);
  return (
    <tr
      className={joinClassNames(
        'table__row',
        // @ts-ignore
        isFunction(className) ? className(rowContextData) : className
      )}
      // @ts-ignore
      onClick={(onClick && ((e) => onClick({ e, ...rowContextData }))) ?? undefined}
      // @ts-ignore
      onDoubleClick={(onDoubleClick && ((e) => onDoubleClick({ e, ...rowContextData }))) ?? undefined}
      ref={innerRef}
      {...rest}
    >
      {children}
    </tr>
  );
}

TableBodyDataRowTemplate.propTypes = propTypes;
TableBodyDataRowTemplate.defaultProps = defaultProps;

export default TableBodyDataRowTemplate;
