// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import SpinnersExamplePropsShape from '../../../../../../propTypesShapes/SpinnersExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: SpinnersExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function SpinnersExampleCodeReact({
  state: {
    props: {
      className,
      id,
      label,
      size,
      strokeWidth,
      value,
    },
  },
}) {
  return (
    <>
      &lt;Spinner
      {
        (className || id || size || strokeWidth || value)
          ? <br />
          : null
      }
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={size && `size={${size}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={strokeWidth && `strokeWith={${strokeWidth}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={value && `value={${value}}`} indentLevel={1} />
      {
        label
          ? (
            <>
              &gt;
              <br />
              <ExampleCodeReactProp displayProp={label} indentLevel={1} />
              &lt;/&gt;
              <br />
            </>
          )
          : '/>'
      }
    </>
  );
}

SpinnersExampleCodeReact.propTypes = propTypes;
SpinnersExampleCodeReact.defaultProps = defaultProps;

export default SpinnersExampleCodeReact;
