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
  ...rest
}) {
  return (
    <tr className={joinClassNames('table-foot__row', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </tr>
  );
}

TableFootRow.propTypes = propTypes;
TableFootRow.defaultProps = defaultProps;

export default TableFootRow;
