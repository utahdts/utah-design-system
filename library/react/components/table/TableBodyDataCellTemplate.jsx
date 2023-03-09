import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import valueAtPath from '../../util/state/valueAtPath';
import TableBodyDataRowContext from './TableBodyDataRowContext';
import TableCell from './TableCell';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  id: PropTypes.string,
  innerRef: RefShape,
  // ({ e, record, recordIndex, records }) => { ... do something ... }
  onClick: PropTypes.func,
  // ({ e, record, recordIndex, records }) => { ... do something ... }
  onDoubleClick: PropTypes.func,
  // the field path in the record to the data to render in the <td>; ie 'person.contact.address.city'
  recordFieldPath: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  id: null,
  innerRef: null,
  onClick: null,
  onDoubleClick: null,
  recordFieldPath: null,
};

function TableBodyDataCellTemplate({
  children,
  className,
  id,
  innerRef,
  onClick,
  onDoubleClick,
  recordFieldPath,
  ...rest
}) {
  // record, recordIndex, records
  const rowContextData = useContext(TableBodyDataRowContext);
  const { record } = rowContextData;

  let content;
  if (isFunction(children)) {
    content = children(rowContextData);
  } else if (children) {
    content = children;
  } else if (recordFieldPath) {
    content = valueAtPath({ object: record, path: recordFieldPath });
  } else {
    content = null;
  }

  return (
    <TableCell
      className={className}
      id={id}
      innerRef={innerRef}
      onClick={onClick && ((e) => onClick({ e, ...rowContextData }))}
      onDoubleClick={onDoubleClick && ((e) => onDoubleClick({ e, ...rowContextData }))}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {content}
    </TableCell>
  );
}

TableBodyDataCellTemplate.propTypes = propTypes;
TableBodyDataCellTemplate.defaultProps = defaultProps;

export default TableBodyDataCellTemplate;
