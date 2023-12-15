import { Checkbox } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').CheckboxExamplePropsShape} CheckboxExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject} props.innerRef
 * @param {import('use-immer').Updater<{props: CheckboxExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {CheckboxExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function CheckboxExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      label,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div ref={innerRef}>
      <Checkbox
        className={className}
        errorMessage={errorMessage}
        id={id}
        isDisabled={isDisabled}
        label={label}
        onChange={() => setState((draftState) => {
          draftState.props.value = !draftState.props.value;
        })}
        value={value}
      />
    </div>
  );
}
