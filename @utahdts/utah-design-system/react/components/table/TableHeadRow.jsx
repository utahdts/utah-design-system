import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {React.JSX.Element}
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
