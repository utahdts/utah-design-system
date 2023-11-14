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
 * @param {string} [props.className]
 * @param {React.RefObject} [props.innerRef]
 * @param {string} [props.id]
 * @returns {JSX.Element}
 */
function Table({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <table className={joinClassNames('table', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
