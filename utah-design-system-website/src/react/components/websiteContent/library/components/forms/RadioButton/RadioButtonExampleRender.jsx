// @ts-check
import { RadioButton, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import RadioButtonExamplePropsShape from '../../../../../../propTypesShapes/RadioButtonExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: RadioButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

export function RadioButtonExampleRender({
  setState,
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
  innerRef,
}) {
  return (
    <div ref={innerRef}>
      <RadioButton
        className={className}
        id={id || 'radio-button-example-render-id'}
        label={label || 'Radio Label'}
        errorMessage={errorMessage}
        isRequired={isRequired}
        isDisabled={isDisabled}
        value={value}
        onChange={() => setState((draftState) => {
          draftState.props.value = !draftState.props.value;
        })}
      />
    </div>
  );
}

RadioButtonExampleRender.propTypes = propTypes;
RadioButtonExampleRender.defaultProps = defaultProps;
