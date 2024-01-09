import {
  DateInput,
  useFormContext
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').DateInputExamplePropsShape} DateInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: DateInputExamplePropsShape}>} props.setState
 * @param {{props: DateInputExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function DateInputExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      name,
      placeholder,
      value,
    },
  },
  innerRef,
}) {
  const { setState: setStateFormContext } = useFormContext();
  return (
    <div style={{ width: '80%' }}>
      <DateInput
        className={className}
        errorMessage={errorMessage}
        id={id || 'date-input-example-render-id'}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRequired={isRequired}
        label={label ?? ''}
        name={name}
        placeholder={placeholder}
        onChange={(newValue) => setState((draftState) => {
          draftState.props.value = newValue;
          setStateFormContext?.(
            (draftStateFormContext) => {
              // @ts-ignore
              draftStateFormContext['props.value'] = newValue;
            }
          );
        })}
        onClear={isClearable ? (() => setState((draftState) => { draftState.props.value = ''; })) : undefined}
        value={value}
      />
    </div>
  );
}
