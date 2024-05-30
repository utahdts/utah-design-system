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
      type,
    },
  },
}) {
  return (
    <>
      &lt;Skeleton
      {
        className
          ? <br />
          : null
      }
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`type="${type}" />`} indentLevel={1} />
    </>
  );
}
