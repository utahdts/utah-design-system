import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../../sandbox/SandboxIndent.jsx';

/** @typedef {import('utah-design-system-website').CheckboxExamplePropsShape} CheckboxExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {CheckboxExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function CheckboxExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      label,
      value,
    },
  },
}) {
  return (
    <>
      &lt;fieldset&gt;
        <br />
        <SandboxIndent indentLevel={2} />
        &lt;legend className="mb-spacing-xs"&gt;Checkbox example&lt;/legend&gt;
        <br />
        <SandboxIndent indentLevel={2} />
        &lt;Checkbox
        <br />
        <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={3} />
        <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={3} />
        <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={3} />
        <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={3} />
        <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={3} />
        <ExampleCodeReactProp displayProp="onChange={() => ...flip state...}" indentLevel={3} />
        <ExampleCodeReactProp displayProp={`value={${value}}`} indentLevel={3} />
        <SandboxIndent indentLevel={2} />
        /&gt;
        <br />
      &lt;/fieldset&gt;
    </>
  );
}
