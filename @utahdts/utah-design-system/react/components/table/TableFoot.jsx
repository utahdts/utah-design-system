import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLTableSectionElement>} [props.innerRef]
 * @returns {import('react').JSX.Element}
 */
export function TableFoot({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <tfoot className={joinClassNames('table-foot', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </tfoot>
  );
}
