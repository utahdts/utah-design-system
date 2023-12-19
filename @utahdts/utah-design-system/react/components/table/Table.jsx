import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLTableElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {React.JSX.Element}
 */
export function Table({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <table className={joinClassNames('table', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children}
    </table>
  );
}
