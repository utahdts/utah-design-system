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

function TableHeadRow({
  children,
  className,
  innerRef,
  id,
}) {
  return (
    <tr className={joinClassNames('some-TableHeadRow-classname', className)} id={id} ref={innerRef}>
      {children}
    </tr>
  );
}

TableHeadRow.propTypes = propTypes;
TableHeadRow.defaultProps = defaultProps;

export default TableHeadRow;
