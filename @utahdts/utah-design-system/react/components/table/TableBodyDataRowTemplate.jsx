import isFunction from 'lodash/isFunction';
import React, { useContext } from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TableBodyDataRowContext } from './TableBodyDataRowContext';
import { TableRow } from './TableRow';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

/**
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {((rowContextData: TableBodyDataRowContextValue<TableDataT>) => string) | string} [props.className]
 * @param {React.RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent})) => void)} [props.onClick]
 * @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent})) => void)} [props.onDoubleClick]
 * @returns {JSX.Element}
 */
export function TableBodyDataRowTemplate({
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
    <TableRow
      className={joinClassNames(
        // @ts-ignore
        isFunction(className) ? className(rowContextData) : className
      )}
      // @ts-ignore
      onClick={(onClick && ((e) => onClick({ e, ...rowContextData }))) ?? undefined}
      // @ts-ignore
      onDoubleClick={(onDoubleClick && ((e) => onDoubleClick({ e, ...rowContextData }))) ?? undefined}
      innerRef={innerRef}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </TableRow>
  );
}
