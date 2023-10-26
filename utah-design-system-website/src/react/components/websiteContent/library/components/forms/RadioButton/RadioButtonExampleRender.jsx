// @ts-check
import { RadioButton, RadioButtonsWrapper, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import RadioButtonExamplePropsShape from '../../../../../../propTypesShapes/RadioButtonExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  state: PropTypes.shape({
    props: RadioButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

export function RadioButtonExampleRender({
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      isRequired,
      label,
      value,
      wrapperClassName,
      wrapperLabel,
    },
  },
  innerRef,
}) {
  return (
    <div ref={innerRef}>
      <RadioButtonsWrapper
        className={wrapperClassName}
        errorMessage={errorMessage}
        label={wrapperLabel || 'Wrapper Label'}
        id="radio-button-example-wrapper-id"
        isRequired={isRequired}
      >
        <RadioButton
          className={className}
          id={id || 'radio-button-example-render-id'}
          isDisabled={isDisabled}
          label={label || 'Radio Label'}
          value={value || 'value example'}
        />
      </RadioButtonsWrapper>
    </div>
  );
}

RadioButtonExampleRender.propTypes = propTypes;
RadioButtonExampleRender.defaultProps = defaultProps;
