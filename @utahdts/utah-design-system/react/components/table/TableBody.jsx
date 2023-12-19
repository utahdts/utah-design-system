import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLTableSectionElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {React.JSX.Element}
 */
export function TableBody({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  return (
    <tbody className={joinClassNames('table-body', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </tbody>
  );
}
