import PropTypes from 'prop-types';
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

function TableRow({
  children,
  className,
  innerRef,
  id,
  onClick,
  onDoubleClick,
  ...rest
}) {
  return (
    <tr
      className={joinClassNames('table__row', className)}
      id={id}
      ref={innerRef}
      onClick={onClick}
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
