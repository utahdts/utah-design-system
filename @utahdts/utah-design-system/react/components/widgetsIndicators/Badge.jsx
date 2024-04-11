import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.title
 * @returns {import('react').JSX.Element}
 */
export function Badge({
  children,
  className,
  title,
}) {
  return (
    <div className={joinClassNames('badge', className)}>
      {children}
      <span className="visually-hidden">{title}</span>
    </div>
  );
}
