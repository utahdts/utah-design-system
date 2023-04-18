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

function TableBody({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <tbody className={joinClassNames('some-TableBody-classname', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </tbody>
  );
}

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
