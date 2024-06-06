import { joinClassNames } from '../../util/joinClassNames';
import { skeletonTypes } from '../../enums/skeletonTypes';

/** @typedef {import('@utahdts/utah-design-system').SkeletonTypes} SkeletonTypes */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {SkeletonTypes} [props.type]
 * @returns {import('react').JSX.Element}
 */
export function Skeleton({
  className,
  innerRef,
  type = skeletonTypes.RECTANGULAR,
  ...rest
}) {
  return (
    <div className={joinClassNames('skeleton', className, type)} ref={innerRef} {...rest} />
  );
}
