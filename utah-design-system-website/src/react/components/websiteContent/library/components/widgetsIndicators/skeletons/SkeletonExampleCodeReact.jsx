import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').SkeletonExamplePropsShape} SkeletonExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: SkeletonExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function SkeletonExampleCodeReact({
  state: {
    props: {
      className,
      style,
    },
  },
}) {
  return (
    <>
      &lt;Skeleton
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`style="${style}" />`} indentLevel={1} />
    </>
  );
}
