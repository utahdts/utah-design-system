import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').RadioButtonExamplePropsShape} RadioButtonExamplePropsShape */

/**
 * @param {Object} props
 * @param {{props: RadioButtonExamplePropsShape}} props.state
 * @returns {JSX.Element}
 */
export function RadioButtonExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      isRequired,
      label,
      value,
    },
  },
}) {
  return (
    <>
      &lt;RadioButtonGroup
      <br />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'label="Choose your station"'} indentLevel={1} />
      <ExampleCodeReactProp displayProp="onChange={(newValue)=> ...do something...}" indentLevel={1} />
      <ExampleCodeReactProp displayProp={value ? `value="${value}"` : null} indentLevel={1} />
      &gt;
      <br />
      <ExampleCodeReactProp displayProp="<RadioButton" indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={'id="radio-button-example-render-id-1"'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={`label="${label}"`} indentLevel={2} />
      <ExampleCodeReactProp displayProp={'value="option-1"'} indentLevel={2} />
      <ExampleCodeReactProp displayProp="/>" indentLevel={1} />

      <ExampleCodeReactProp displayProp="<RadioButton" indentLevel={1} />
      <ExampleCodeReactProp displayProp={'id="radio-button-example-render-id-2"'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={'label="Option #2"'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={'value="option-2"'} indentLevel={2} />
      <ExampleCodeReactProp displayProp="/>" indentLevel={1} />
      &lt;/RadioButtonGroup&gt;
    </>
  );
}
