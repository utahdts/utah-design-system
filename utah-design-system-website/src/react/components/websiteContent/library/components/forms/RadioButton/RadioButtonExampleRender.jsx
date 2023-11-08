// @ts-check
import { RadioButton, RadioButtonGroup } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').RadioButtonExamplePropsShape} RadioButtonExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: RadioButtonExamplePropsShape}>} props.setState
 * @param {{props: RadioButtonExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
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
      <RadioButtonGroup
        errorMessage={errorMessage}
        isRequired={isRequired}
        id={id}
        label="Choose your station"
        onChange={(newValue) => setState((draftState) => {
          draftState.props.value = newValue;
        })}
        value={value}
      >
        <RadioButton
          className={className}
          id="radio-button-example-render-id-1"
          isDisabled={isDisabled}
          label={label}
          value="option-1"
        />
        <RadioButton
          id="radio-button-example-render-id-2"
          label="Option #2"
          value="option-2"
        />
      </RadioButtonGroup>
    </div>
  );
}
