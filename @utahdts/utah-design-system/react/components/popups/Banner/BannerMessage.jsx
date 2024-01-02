import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function BannerMessage({
  children,
  className,
}) {
  return (
    <div
      className={joinClassNames('banner__message', className)}
    >
      {children}
    </div>
  );
}
