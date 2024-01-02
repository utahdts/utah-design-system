import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {import('react').JSX.Element}
 */
export function TableHeadRow({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <tr className={joinClassNames('table-head__row', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </tr>
  );
}
