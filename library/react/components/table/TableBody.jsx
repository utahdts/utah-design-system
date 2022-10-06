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

function TableBody({
  children,
  className,
  innerRef,
  id,
}) {
  return (
    <tbody className={joinClassNames('some-TableBody-head-classname', className)} id={id} ref={innerRef}>
      {children}
    </tbody>
  );
}

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
