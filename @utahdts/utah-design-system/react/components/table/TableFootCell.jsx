// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  innerRef: null,
  id: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode | null} props.children
 * @param {string | null} props.className
 * @param {React.RefObject | null} props.innerRef
 * @param {string | null} props.id
 * @returns {JSX.Element}
 */
function TableFootCell({
  children = null,
  className = null,
  innerRef = null,
  id = null,
  ...rest
}) {
  return (
    <td className={joinClassNames('table-foot__cell', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </td>
  );
}

TableFootCell.propTypes = propTypes;
TableFootCell.defaultProps = defaultProps;

export default TableFootCell;
