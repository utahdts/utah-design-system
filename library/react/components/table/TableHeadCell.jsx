import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // The field related to this column. CellTemplate and RowTemplate can define a field. This field is used for determining sorting and filtering.
  field: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
  sortFields: PropTypes.arrayOf(PropTypes.string),
};
const defaultProps = {
  children: null,
  className: null,
  field: null,
  innerRef: null,
  id: null,
  sortFields: null,
};

function TableHeadCell({
  children,
  className,
  field,
  innerRef,
  id,
  sortFields,
  ...rest
}) {
  return (
    <th className={joinClassNames('some-TableHeadCell-classname', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </th>
  );
}

TableHeadCell.propTypes = propTypes;
TableHeadCell.defaultProps = defaultProps;

export default TableHeadCell;
