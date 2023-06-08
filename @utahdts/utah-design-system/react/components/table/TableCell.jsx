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
      className={joinClassNames('some-TableCell-classname', className)}
      id={id}
      ref={innerRef}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      role="gridcell"
      {...rest}
    >
      {children}
    </td>
  );
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
