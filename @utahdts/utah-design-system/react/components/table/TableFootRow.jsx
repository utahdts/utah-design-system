// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
};
const defaultProps = {
  className: null,
  innerRef: null,
  id: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string | null} props.className
 * @param {React.RefObject | null} props.innerRef
 * @param {string | null} props.id
 * @returns {JSX.Element}
 */
function TableFootRow({
  children,
  className = null,
  innerRef = null,
  id = null,
  ...rest
}) {
  return (
    <tr className={joinClassNames('table-foot__row', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </tr>
  );
}

TableFootRow.propTypes = propTypes;
TableFootRow.defaultProps = defaultProps;

export default TableFootRow;
