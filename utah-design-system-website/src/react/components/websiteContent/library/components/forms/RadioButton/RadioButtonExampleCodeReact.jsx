// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RadioButtonExamplePropsShape from '../../../../../../propTypesShapes/RadioButtonExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: RadioButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

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
      &lt;RadioButton
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={`isRequired="${isRequired}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={2} />
      <ExampleCodeReactProp displayProp={value ? `value="${value}"` : null} indentLevel={2} />
      /&gt;
      &lt;/RadioButtonsWrapper&gt;
    </>
  );
}

RadioButtonExampleCodeReact.propTypes = propTypes;
RadioButtonExampleCodeReact.defaultProps = defaultProps;
