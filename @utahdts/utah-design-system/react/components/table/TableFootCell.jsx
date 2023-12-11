// @ts-check
import React from 'react';
import joinClassNames from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {React.RefObject<HTMLTableCellElement>} props.innerRef
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export function TableFootCell({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <td className={joinClassNames('table-foot__cell', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </td>
  );
}
