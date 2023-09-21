// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import TextAreaExamplePropsShape from '../../../../../../propTypesShapes/TextAreaExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: TextAreaExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function TextAreaExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      name,
      placeholder,
      value,
    },
  },
}) {
  return (
    <>
      &lt;TextArea
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={name ? `id="${name}"` : null} indentLevel={1} />
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

TextAreaExampleCodeReact.propTypes = propTypes;
TextAreaExampleCodeReact.defaultProps = defaultProps;

export default TextAreaExampleCodeReact;
