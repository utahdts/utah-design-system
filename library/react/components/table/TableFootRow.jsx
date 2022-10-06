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

function TableFootRow({
  children,
  className,
  innerRef,
  id,
}) {
  return (
    <tr className={joinClassNames('some-TableFootRow-classname', className)} id={id} ref={innerRef}>
      {children}
    </tr>
  );
}

TableFootRow.propTypes = propTypes;
TableFootRow.defaultProps = defaultProps;

export default TableFootRow;
