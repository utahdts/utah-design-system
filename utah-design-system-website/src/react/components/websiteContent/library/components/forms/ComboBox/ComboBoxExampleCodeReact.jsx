// @ts-check
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('../../../../../../../typedefs.d').ComboBoxExamplePropsShape} ComboBoxExamplePropsShape */

/**
 * @param {Object} props
 * @param {{props: ComboBoxExamplePropsShape}} props.state
 * @returns {JSX.Element}
 */
export default function ComboBoxExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      value,
    },
  },
}) {
  return (
    <>
      &lt;ComboBox
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'isClearable' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onChange={(e) => { /* ... do something w/ e ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'onClear={(e) => { /* ... do something w/ e ... */ }' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      &gt;
      <br />
      <ExampleCodeReactProp displayProp={'<SelectOption label="Arches National Park" value="arches" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<SelectOption label="Bryce Canyon National Park" value="bryce" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<SelectOption label="Canyonlands National Park" value="canyonlands" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<SelectOption label="Capitol Reef National Park" value="capitol-reef" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<SelectOption label="Zion National Park" value="zion" />'} indentLevel={1} />
      &lt;/ComboBox&gt;
    </>
  );
}
