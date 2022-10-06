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

function TableHead({
  children,
  className,
  innerRef,
  id,
}) {
  return (
    <thead className={joinClassNames('some-TableHead-head-classname', className)} id={id} ref={innerRef}>
      {children}
    </thead>
  );
}

TableHead.propTypes = propTypes;
TableHead.defaultProps = defaultProps;

export default TableHead;
