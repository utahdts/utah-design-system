import React from 'react';
import joinClassNames from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {React.RefObject<HTMLTableCellElement>} [props.innerRef]
 * @returns {JSX.Element}
 */
export function TableFilterNone({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-none', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </th>
  );
}
