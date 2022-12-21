import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  innerRef: null,
  id: null,
};

function TableFilterNone({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <th className={joinClassNames('some-TableFilterNone-classname', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </th>
  );
}

TableFilterNone.propTypes = propTypes;
TableFilterNone.defaultProps = defaultProps;

export default TableFilterNone;
