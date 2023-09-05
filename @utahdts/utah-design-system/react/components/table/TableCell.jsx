/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

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

function TableCell({
  children,
  className,
  id,
  innerRef,
  onClick,
  onDoubleClick,
  ...rest
}) {
  return (
    <td
      className={joinClassNames('table__cell', className)}
      id={id}
      ref={innerRef}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      {...rest}
    >
      {children}
    </td>
  );
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
