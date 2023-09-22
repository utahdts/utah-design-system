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
      id,
      maxLength,
      value,
    },
  },
}) {
  return (
    <>
      &lt;TextArea
      <br />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={maxLength ? `maxLength="${maxLength}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'label="Text Area Label"'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      /&gt;
    </>
  );
}

CharacterCountExampleCodeReact.propTypes = propTypes;
CharacterCountExampleCodeReact.defaultProps = defaultProps;

export default CharacterCountExampleCodeReact;
