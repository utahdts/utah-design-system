// @ts-check
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('../../../../../../../typedefs.d').MultiSelectExamplePropsShape} MultiSelectExamplePropsShape */

/**
 * @param {Object} props
 * @param {{props: MultiSelectExamplePropsShape}} props.state
 * @returns {JSX.Element}
 */
export default function MultiSelectExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      values,
    },
  },
}) {
  return (
    <>
      &lt;MultiSelect
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
      <ExampleCodeReactProp displayProp={`values={[${values.map((value) => `'${value}'`).join(',')}]}`} indentLevel={1} />
      &gt;
      <br />
      <ExampleCodeReactProp displayProp={'<MultiSelectOption label="Arches" value="arches" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<MultiSelectOption label="Bryce Canyon" value="bryce" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<MultiSelectOption label="Canyonlands" value="canyonlands" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<MultiSelectOption label="Capitol Reef" value="capitol-reef" />'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<MultiSelectOption label="Zion" value="zion" />'} indentLevel={1} />
      &lt;/MultiSelect&gt;
    </>
  );
}
