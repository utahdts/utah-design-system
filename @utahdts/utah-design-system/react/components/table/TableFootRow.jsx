import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
 * @returns {import('react').JSX.Element}
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
