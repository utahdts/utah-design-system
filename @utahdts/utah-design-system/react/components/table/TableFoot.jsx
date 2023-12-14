import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {React.RefObject<HTMLTableSectionElement>} props.innerRef
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export function TableFoot({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <tfoot className={joinClassNames('table-foot', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </tfoot>
  );
}
