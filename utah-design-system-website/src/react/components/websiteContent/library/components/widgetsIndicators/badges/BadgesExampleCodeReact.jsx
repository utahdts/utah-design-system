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
      &lt;button className=&quot;button button--solid&quot; type=&quot;button&quot; &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      Button
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;Badge
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={`title="${title}"`} indentLevel={2} />
      <SandboxIndent indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={2} />
      {children}
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;/Badge&gt;
      <br />
      &lt;/button&gt;
    </>
  );
}
