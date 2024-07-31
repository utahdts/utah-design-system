import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLTableSectionElement>} [props.innerRef]
 * @param {string} [props.id]
 * @returns {import('react').JSX.Element}
 */
export function TableHead({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <thead
      className={joinClassNames('table-head', className)}
      id={id ?? undefined}
      ref={innerRef}
      {...rest}
    >
      {children}
    </thead>
  );
}
