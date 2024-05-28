import { Skeleton } from '@utahdts/utah-design-system';
/** @typedef {import('utah-design-system-website').SkeletonExamplePropsShape} SkeletonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {SkeletonExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function SkeletonExampleRender({
  state: {
    props: {
      className,
      style,
    },
  },
  innerRef,
}) {
  return (
    <div>
      <Skeleton
        className={className}
        style={style}
        innerRef={innerRef}
      />
    </div>
  );
}
