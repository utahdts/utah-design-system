import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../../sandbox/SandboxIndent';

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
      &lt;div aria-busy=&quot;true&quot;&gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;Skeleton
      {
          className
            ? (
              <>
                <br />
                <SandboxIndent indentLevel={2} />
              </>
            )
            : null
        }
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      {
        className
          ? <SandboxIndent indentLevel={2} />
          : null
      }
      <ExampleCodeReactProp displayProp={`type="${type}" />`} indentLevel={1} />
      &lt;/div&gt;
    </>
  );
}
