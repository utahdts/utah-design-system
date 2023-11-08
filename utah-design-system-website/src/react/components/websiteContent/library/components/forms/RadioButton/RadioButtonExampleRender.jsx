// @ts-check
import { RadioButton, RadioButtonWrapper } from '@utahdts/utah-design-system';
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
      isChecked,
      isDisabled,
      isRequired,
      label,
    },
  },
  innerRef,
}) {
  return (
    <div ref={innerRef}>
      <RadioButtonWrapper
        errorMessage={errorMessage}
        isRequired={isRequired}
        label="Choose your station"
      // TODO: should radio button wrapper have an onchange to conrol its children!
      // name belongs on the wrapper
      // wrapper has a radio button context
      // wrapper handles onchange
      // wrapper coordinates the current value with the form context
      // radio button does not have default is checked, instead wrapper has defaultvalue
      // radio button does not have isChecked, set value through wrapper

      // onChange={() => setState((draftState) => {
      //   console.log('on change triggered');
      //   draftState.props.isChecked = !draftState.props.isChecked;
      // })}
      // value="radio-button-example-render-value2"
      >
        <RadioButton
          className={className}
          id={id}
          label={label}
          isChecked={isChecked}
          isDisabled={isDisabled}
          name="radio-button-example-render-name"
          onChange={() => setState((draftState) => {
            console.log('on change triggered');
            draftState.props.isChecked = !draftState.props.isChecked;
          })}
          value="radio-button-example-render-value1"
        />
        <RadioButton
          id="radio-button-example-render-id-2"
          isChecked={!isChecked}
          label="Option #2"
          name="radio-button-example-render-name"
          onChange={() => setState((draftState) => {
            draftState.props.isChecked = false;
          })}
          value="radio-button-example-render-value2"
        />
      </RadioButtonWrapper>
    </div>
  );
}
