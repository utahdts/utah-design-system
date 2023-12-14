import React from 'react';
import joinClassNames from '../../util/joinClassNames';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {React.RefObject<HTMLTableCellElement>} [props.innerRef]
 * @returns {JSX.Element}
 */
export function TableCell({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <td
      className={joinClassNames('table__cell', className)}
      id={id ?? undefined}
      ref={innerRef}
      {...rest}
    >
      {children}
    </td>
  );
}
