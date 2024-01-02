import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @returns {import('react').JSX.Element}
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
