// @ts-check
import React from 'react';
import joinClassNames from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {React.RefObject} props.innerRef
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export function TableFootRow({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <tr className={joinClassNames('table-foot__row', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </tr>
  );
}
