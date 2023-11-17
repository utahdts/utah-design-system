// @ts-check
import joinClassNames from '../../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {React.RefObject} [props.innerRef]
 * * @returns {JSX.Element}
 */
export function BannerIcon({
  children,
  className,
  id,
  innerRef,
}) {
  return (
    <div
      className={joinClassNames('banner--icon', className)}
      id={id}
      ref={innerRef}
    >
      {children}
    </div>
  );
}
