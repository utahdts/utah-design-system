// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

/**
 * @template TableDataT
 * @typedef {import('../../jsDocTypes').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  innerRef: RefShape,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
};
const defaultProps = {
  children: null,
  className: null,
  id: null,
  innerRef: null,
  onClick: null,
  onDoubleClick: null,
};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.id]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {((param: {e: Event}) => void) | null} [props.onClick]
 * @param {((param: {e: Event}) => void) | null} [props.onDoubleClick]
 * @returns {JSX.Element}
 */
function TableCell({
  children = null,
  className = null,
  id = null,
  innerRef = null,
  onClick = null,
  onDoubleClick = null,
  ...rest
}) {
  return (
    <td
      className={joinClassNames('table__cell', className)}
      id={id ?? undefined}
      ref={innerRef}
      // @ts-ignore
      onClick={onClick ?? undefined}
      // @ts-ignore
      onDoubleClick={onDoubleClick ?? undefined}
      {...rest}
    >
      {children}
    </td>
  );
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
