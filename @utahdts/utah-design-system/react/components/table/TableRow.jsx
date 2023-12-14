import React from 'react';
import joinClassNames from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {import('react').MouseEventHandler<HTMLTableRowElement>} [props.onClick]
 * @param {import('react').MouseEventHandler<HTMLTableRowElement>} [props.onDoubleClick]
 * @returns {JSX.Element | null}
 */
export function TableRow({
  children,
  className,
  innerRef,
  id,
  onClick,
  onDoubleClick,
  ...rest
}) {
  return (
    <tr
      className={joinClassNames('table__row', className)}
      id={id ?? undefined}
      ref={innerRef}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      {...rest}
    >
      {children}
    </tr>
  );
}
