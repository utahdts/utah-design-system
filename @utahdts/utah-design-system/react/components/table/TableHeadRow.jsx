import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {JSX.Element}
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
