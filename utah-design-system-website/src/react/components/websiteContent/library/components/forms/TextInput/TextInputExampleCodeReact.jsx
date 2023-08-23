// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import TextInputExamplePropsShape from '../../../../../../propTypesShapes/TextInputExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: TextInputExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function TextInputExampleCodeReact({
  state: {
    props: {
      className,
      id,
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
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onChange={(e) => { /* ... do something w/ e ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`placeholder="${placeholder}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      /&gt;
    </>
  );
}

TextInputExampleCodeReact.propTypes = propTypes;
TextInputExampleCodeReact.defaultProps = defaultProps;

export default TextInputExampleCodeReact;
