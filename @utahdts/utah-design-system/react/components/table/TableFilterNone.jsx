import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @returns {import('react').JSX.Element}
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
