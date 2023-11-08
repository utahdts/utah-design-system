// @ts-check
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('../../../../../../../typedefs.d').RadioButtonExamplePropsShape} RadioButtonExamplePropsShape */

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
      isChecked,
      isDisabled,
      isRequired,
      label,
    },
  },
}) {
  return (
    <>
      &lt;RadioButtonWrapper&gt;
      <br />
      <ExampleCodeReactProp displayProp="<RadioButton" indentLevel={2} />

      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={3} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={3} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={3} />
      <ExampleCodeReactProp displayProp={isChecked ? 'isChecked' : null} indentLevel={3} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={3} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={3} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={3} />

      <ExampleCodeReactProp displayProp="/>" indentLevel={2} />
      &lt;/RadioButtonWrapper&gt;
    </>
  );
}
