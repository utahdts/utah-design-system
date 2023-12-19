import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * * @returns {React.JSX.Element}
 */
export function BannerIcon({
  children,
  className,
}) {
  return (
    <div
      aria-hidden="true"
      className={joinClassNames('banner__icon', className)}
    >
      {children}
    </div>
  );
}
