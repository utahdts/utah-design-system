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
};
const defaultProps = {
  children: null,
  className: null,
  id: null,
  innerRef: null,
};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.id]
 * @param {React.RefObject | null} [props.innerRef]
 * @returns {JSX.Element}
 */
function TableCell({
  children = null,
  className = null,
  id = null,
  innerRef = null,
  ...rest
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <td
      className={joinClassNames('table__cell', className)}
      id={id ?? undefined}
      ref={innerRef}
      {...rest}
    >
      {children}
    </td>
  );
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
