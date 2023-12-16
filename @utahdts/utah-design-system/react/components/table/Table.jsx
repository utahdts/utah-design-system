import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLTableElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {JSX.Element}
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
