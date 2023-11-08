// @ts-check
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('../../../../../../../typedefs.d').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

/**
 * @param {Object} props
 * @param {Object} props.state
 * @param {CharacterCountExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function CharacterCountExampleCodeReact({
  state: {
    props: {
      className,
      id,
      maxLength,
      text,
    },
  },
}) {
  return (
    <>
      &lt;CharacterCount
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={maxLength ? `maxLength="${maxLength}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`text={\`${text}\`}`} indentLevel={1} />
      /&gt;
    </>
  );
}
