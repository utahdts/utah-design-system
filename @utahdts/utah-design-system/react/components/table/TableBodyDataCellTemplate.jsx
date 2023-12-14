import { isFunction } from 'lodash';
import React, { useContext } from 'react';
import { valueAtPath } from '../../util/state/valueAtPath';
import { TableBodyDataRowContext } from './TableBodyDataRowContext';
import { TableCell } from './TableCell';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

/**
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode | ((record: TableBodyDataRowContextValue<TableDataT>) => JSX.Element)} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {React.RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent, record: TableDataT})) => void)} [props.onClick]
 * @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent, record: TableDataT})) => void)} [props.onDoubleClick]
 * @param {string} [props.recordFieldPath] the field path in the record to the data to render in the <td>; ie 'person.contact.address.city'
 * @returns {JSX.Element}
 */
export function TableBodyDataCellTemplate({
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
    // @ts-ignore
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
      // @ts-ignore
      onClick={onClick && ((e) => onClick({ e, ...rowContextData }))}
      // @ts-ignore
      onDoubleClick={onDoubleClick && ((e) => onDoubleClick({ e, ...rowContextData }))}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {content}
    </TableCell>
  );
}
