// @ts-check
import { CharacterCount, RefShape, TextArea } from '@utahdts/utah-design-system';
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
      className,
      id,
      maxLength,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }} ref={innerRef}>
      <TextArea
        id="text-area-example-render-id"
        onChange={(e) => setState((draftState) => {
          draftState.props.value = e.target.value;
        })}
        label="Text Area Label"
        value={value}
        wrapperClassName="input-wrapper--mb-zero"
      />
      <CharacterCount
        className={className}
        id={id || 'default-character-count-id'}
        maxLength={Number(maxLength) || 0}
        text={value}
      />
    </div>
  );
}

CharacterCountExampleRender.propTypes = propTypes;
CharacterCountExampleRender.defaultProps = defaultProps;

export default CharacterCountExampleRender;
