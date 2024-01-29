import { TimeInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TimeInputExamplePropsShape} TimeInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TimeInputExamplePropsShape}>} props.setState
 * @param {{props: TimeInputExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function TimeInputExampleRender({
  setState,
  state: {
    props: {
      allowCustomEntry,
      className,
      errorMessage,
      hasTimePopup,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      name,
      placeholder,
      timeFormat,
      timeRangeIncrement,
      timeRangeBegin,
      timeRangeEnd,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <TimeInput
        allowCustomEntry={allowCustomEntry}
        className={className}
        errorMessage={errorMessage}
        hasTimePopup={hasTimePopup}
        id={id || 'time-input-example-id'}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRequired={isRequired}
        label={label ?? ''}
        name={name}
        onChange={(newValue) => setState((draftState) => {
          draftState.props.value = newValue;
        })}
        onClear={() => {
          setState((draftState) => { draftState.props.value = ''; });
        }}
        placeholder={placeholder}
        timeFormat={timeFormat}
        timeRangeIncrement={Number(timeRangeIncrement) || 15}
        timeRangeBegin={timeRangeBegin}
        timeRangeEnd={timeRangeEnd}
        value={value}
      />
    </div>
  );
}
