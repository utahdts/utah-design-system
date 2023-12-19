import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {React.RefObject<HTMLTableCellElement>} [props.innerRef]
 * @returns {React.JSX.Element}
 */
export function TableFootCell({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <td className={joinClassNames('table-foot__cell', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </td>
  );
}
