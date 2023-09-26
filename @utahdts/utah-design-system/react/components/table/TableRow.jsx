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
  // (e) => { ... do something ... }
  onClick: PropTypes.func,
  // (e) => { ... do something ... }
  onDoubleClick: PropTypes.func,
};
const defaultProps = {
  className: null,
  innerRef: null,
  id: null,
  onClick: null,
  onDoubleClick: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string | null} props.className
 * @param {React.RefObject | null} props.innerRef
 * @param {string | null} props.id
 * @param {((e: Event) => void) | null} props.onClick
 * @param {((e: Event) => void) | null} props.onDoubleClick
 * @returns {JSX.Element}
 */
function TableRow({
  children,
  className = null,
  innerRef = null,
  id = null,
  onClick = null,
  onDoubleClick = null,
  ...rest
}) {
  return (
    <tr
      className={joinClassNames('table__row', className)}
      id={id ?? undefined}
      ref={innerRef}
      // @ts-ignore
      onClick={onClick ?? undefined}
      // @ts-ignore
      onDoubleClick={onDoubleClick}
      {...rest}
    >
      {children}
    </tr>
  );
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
