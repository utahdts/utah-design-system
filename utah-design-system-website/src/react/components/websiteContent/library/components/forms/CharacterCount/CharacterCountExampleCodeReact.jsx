// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import CharacterCountExamplePropsShape from '../../../../../../propTypesShapes/CharacterCountExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: CharacterCountExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function CharacterCountExampleCodeReact({
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

CharacterCountExampleCodeReact.propTypes = propTypes;
CharacterCountExampleCodeReact.defaultProps = defaultProps;

export default CharacterCountExampleCodeReact;
