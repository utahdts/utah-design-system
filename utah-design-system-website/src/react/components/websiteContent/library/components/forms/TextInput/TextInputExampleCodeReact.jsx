import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').TextInputExamplePropsShape} TextInputExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {TextInputExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function TextInputExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      placeholder,
      value,
    },
  },
}) {
  return (
    <>
      &lt;TextInput
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'isClearable' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'onClear={(e) => { /* ... do something w/ e ... */ }' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={placeholder && `placeholder="${placeholder}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      /&gt;
    </>
  );
}
