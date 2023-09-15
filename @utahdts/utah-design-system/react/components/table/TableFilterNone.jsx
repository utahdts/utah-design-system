// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

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
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.id]
 * @param {React.RefObject | null} [props.innerRef]
 * @returns {JSX.Element}
 */
function TableFilterNone({
  children = null,
  className = null,
  id = null,
  innerRef = null,
  ...rest
}) {
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-none', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </th>
  );
}

TableFilterNone.propTypes = propTypes;
TableFilterNone.defaultProps = defaultProps;

export default TableFilterNone;
