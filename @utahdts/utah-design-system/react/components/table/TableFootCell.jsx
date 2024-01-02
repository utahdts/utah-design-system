import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @returns {import('react').JSX.Element}
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
