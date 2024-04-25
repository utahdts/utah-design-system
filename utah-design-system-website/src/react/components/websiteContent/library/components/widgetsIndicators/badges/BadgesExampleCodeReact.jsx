import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').BadgesExamplePropsShape} BadgesExamplePropsShape */
/**
 * @param {object} props
 * @param {object} props.state
 * @param {BadgesExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */

export function BadgesExampleCodeReact({
  state: {
    props: {
      children,
      className,
      title,
    },
  },
}) {
  return (
    <>
      &lt;Badge
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`title="${title}"`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {children}
      <br />
      &lt;/Badge&gt;
    </>
  );
}
