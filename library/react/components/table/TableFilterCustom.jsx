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

function TableFilter({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <th className={joinClassNames('some-TableFilter-classname', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </th>
  );
}

TableFilter.propTypes = propTypes;
TableFilter.defaultProps = defaultProps;

export default TableFilter;
