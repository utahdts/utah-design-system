import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {React.RefObject<HTMLTableRowElement>} [props.innerRef]
 * @returns {JSX.Element}
 */
export function TableFootRow({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <tr className={joinClassNames('table-foot__row', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </tr>
  );
}
