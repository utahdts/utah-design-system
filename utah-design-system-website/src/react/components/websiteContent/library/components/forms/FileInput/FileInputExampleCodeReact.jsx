import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').FileInputExamplePropsShape} FileInputExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {FileInputExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function FileInputExampleCodeReact({
  state: {
    props: {
      acceptedFileTypes,
      className,
      errorMessage,
      hint,
      id,
      isDisabled,
      isRequired,
      label,
      name,
    },
  },
}) {
  return (
    <>
      &lt;FileInput
      <br />
      <ExampleCodeReactProp displayProp={acceptedFileTypes ? `acceptedFileTypes="${acceptedFileTypes}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={hint ? `hint="${hint}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? `isDisabled="${isDisabled}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? `isRequired="${isRequired}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={name ? `name="${name}"` : null} indentLevel={1} />
      /&gt;
    </>
  );
}
