import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').CheckboxExamplePropsShape} CheckboxExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {CheckboxExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
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
      &lt;Checkbox
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp="onChange={() => ...flip state...}" indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value={${value}}`} indentLevel={1} />
      /&gt;
    </>
  );
}
