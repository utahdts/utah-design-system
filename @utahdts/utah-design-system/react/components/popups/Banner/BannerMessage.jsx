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
export function BannerMessage({
  children,
  className,
  id,
  innerRef,
}) {
  return (
    <div
      id={id}
      className={joinClassNames('banner--message', className)}
      ref={innerRef}
    >
      {children}
    </div>
  );
}
