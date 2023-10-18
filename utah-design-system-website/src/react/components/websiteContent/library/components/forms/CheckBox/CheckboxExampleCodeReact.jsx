// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import CheckboxExamplePropsShape from '../../../../../../propTypesShapes/CheckboxExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: CheckboxExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function CheckboxExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      label,
      value,
    },
  },
}) {
  return (
    <>
      &lt;Checkbox
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      /&gt;
    </>
  );
}

CheckboxExampleCodeReact.propTypes = propTypes;
CheckboxExampleCodeReact.defaultProps = defaultProps;

export default CheckboxExampleCodeReact;
