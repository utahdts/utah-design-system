import { TextArea } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').TextAreaExamplePropsShape} TextAreaExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject} props.innerRef
 * @param {import('use-immer').Updater<{props: TextAreaExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TextAreaExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function TextAreaExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      label,
      name,
      placeholder,
      isRequired,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <TextArea
        className={className}
        errorMessage={errorMessage}
        id={id || 'text-area-example-render-id'}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        onChange={(e) => setState((draftState) => {
          draftState.props.value = e.target.value;
        })}
        onClear={
          isClearable
            ? (
              () => setState((draftState) => {
                draftState.props.value = '';
              })
            )
            : undefined
        }
        label={label || 'Text Area Label'}
        name={name}
        placeholder={placeholder}
        isRequired={isRequired}
        value={value}
      />
    </div>
  );
}
