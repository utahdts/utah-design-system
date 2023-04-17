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

function TableFoot({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <tfoot className={joinClassNames('some-TableFoot-classname', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </tfoot>
  );
}

TableFoot.propTypes = propTypes;
TableFoot.defaultProps = defaultProps;

export default TableFoot;
