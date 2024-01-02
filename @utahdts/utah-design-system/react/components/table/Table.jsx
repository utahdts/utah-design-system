import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLTableElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {import('react').JSX.Element}
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
