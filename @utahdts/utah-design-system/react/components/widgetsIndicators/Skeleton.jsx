import { joinClassNames } from '../../util/joinClassNames';
import { skeletonStyles } from '../../enums/skeletonStyles.js';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} [props.style]
 * @returns {import('react').JSX.Element}
 */
export function Skeleton({
  className,
  innerRef,
  style = skeletonStyles.RECTANGULAR,
  ...rest
}) {
  return (
    <div className={joinClassNames('skeleton', className, style)} ref={innerRef} {...rest} />
  );
}
