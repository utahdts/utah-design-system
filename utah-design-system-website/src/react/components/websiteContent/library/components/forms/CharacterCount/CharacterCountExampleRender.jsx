// @ts-check
import { RefShape, TextArea } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import CharacterCountExamplePropsShape from '../../../../../../propTypesShapes/CharacterCountExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: CharacterCountExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function CharacterCountExampleRender({
  setState,
  state: {
    props: {
      id,
      maxLength,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <TextArea
        id={id || 'text-area-example-render-id'}
        innerRef={innerRef}
        onChange={(e) => setState((draftState) => {
          draftState.props.value = e.target.value;
        })}
        label="Text Area Label"
        maxLength={maxLength}
        value={value}
      />
    </div>
  );
}

CharacterCountExampleRender.propTypes = propTypes;
CharacterCountExampleRender.defaultProps = defaultProps;

export default CharacterCountExampleRender;
