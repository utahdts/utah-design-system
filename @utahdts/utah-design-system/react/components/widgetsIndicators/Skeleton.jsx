import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @returns {import('react').JSX.Element}
 */
export function Skeleton({
  className,
  innerRef,
  ...rest
}) {
  return (
    <div className={joinClassNames('skeleton', className)} ref={innerRef} {...rest} />
  );
}
