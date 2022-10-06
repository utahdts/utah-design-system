import PropTypes from 'prop-types';
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

function TableFootCell({
  children,
  className,
  innerRef,
  id,
}) {
  return (
    <td className={joinClassNames('some-TableFootCell-classname', className)} id={id} ref={innerRef}>
      {children}
    </td>
  );
}

TableFootCell.propTypes = propTypes;
TableFootCell.defaultProps = defaultProps;

export default TableFootCell;
