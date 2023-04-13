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

function Table({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <table className={joinClassNames('some-table-classname', className)} id={id} ref={innerRef} role="grid" {...rest}>
      {children}
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
