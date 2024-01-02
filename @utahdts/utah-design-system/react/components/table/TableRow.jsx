import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {import('react').MouseEventHandler<HTMLTableRowElement>} [props.onClick]
 * @param {import('react').MouseEventHandler<HTMLTableRowElement>} [props.onDoubleClick]
 * @returns {import('react').JSX.Element | null}
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
