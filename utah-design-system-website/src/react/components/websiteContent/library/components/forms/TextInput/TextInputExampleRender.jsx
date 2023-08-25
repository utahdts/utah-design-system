// @ts-check
/* eslint-disable react/jsx-props-no-spreading */
import { RefShape, TextInput } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import TextInputExamplePropsShape from '../../../../../../propTypesShapes/TextInputExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TextInputExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function TextInputExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      label,
      placeholder,
      isRequired,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <TextInput
        className={className}
        errorMessage={errorMessage}
        id={id || 'text-input-example-render-id'}
        innerRef={innerRef}
        isDisabled={isDisabled}
        onChange={(e) => setState((draftState) => {
          draftState.props.value = e.target.value;
        })}
        label={label || 'Text Input Label'}
        placeholder={placeholder}
        isRequired={isRequired}
        value={value}
      />
    </div>
  );
}

TextInputExampleRender.propTypes = propTypes;
TextInputExampleRender.defaultProps = defaultProps;

export default TextInputExampleRender;
