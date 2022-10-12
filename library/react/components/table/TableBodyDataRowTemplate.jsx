import { useContext } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableBodyDataRowContext from './TableBodyDataRowContext';

const propTypes = {
  // the TableBodyDataCellTemplates for the row
  children: PropTypes.node.isRequired,
  // className for the <TableRow>
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // ref to the <TableRow>
  innerRef: RefShape,
  // ({ e }) => { ... do something ... }
  onClick: PropTypes.func,
  // ({ e }) => { ... do something ... }
  onDoubleClick: PropTypes.func,
};
const defaultProps = {
  className: null,
  innerRef: null,
  onClick: null,
  onDoubleClick: null,
};

function TableBodyDataRowTemplate({
  children,
  className,
  innerRef,
  onClick,
  onDoubleClick,
  ...rest
}) {
  // record, recordIndex, records
  const rowContextData = useContext(TableBodyDataRowContext);
  return (
    <tr
      className={joinClassNames(
        'some-TableBodyDataRowTemplate-classname',
        isFunction(className) ? className(rowContextData) : className
      )}
      onClick={onClick && ((e) => onClick({ e, ...rowContextData }))}
      onDoubleClick={onDoubleClick && ((e) => onDoubleClick({ e, ...rowContextData }))}
      ref={innerRef}
      {...rest}
    >
      {children}
    </tr>
  );
}

TableBodyDataRowTemplate.propTypes = propTypes;
TableBodyDataRowTemplate.defaultProps = defaultProps;

export default TableBodyDataRowTemplate;
