import { TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TextInputExamplePropsShape} TextInputExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @param {import('use-immer').Updater<{props: TextInputExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TextInputExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function TextInputExampleRender({
  innerRef,
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      label,
      placeholder,
      isRequired,
      value,
    },
  },
}) {
  return (
    <div style={{ width: '80%' }}>
      <TextInput
        className={className}
        errorMessage={errorMessage}
        id={id}
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
        label={label || 'Text Input Label'}
        placeholder={placeholder}
        isRequired={isRequired}
        value={value}
      />
    </div>
  );
}
