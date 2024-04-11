import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function Badge({
  title,
  children,
  className,
}) {
  return (
    <div className={joinClassNames('badge', className)}>
      {children}
      <span className="visually-hidden">{title}</span>
    </div>
  );
}
