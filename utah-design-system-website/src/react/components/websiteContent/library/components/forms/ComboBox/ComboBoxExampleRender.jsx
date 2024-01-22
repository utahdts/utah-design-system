import {
  ComboBox,
  ComboBoxOption,
  useFormContext
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').ComboBoxExamplePropsShape} ComboBoxExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: ComboBoxExamplePropsShape}>} props.setState
 * @param {{props: ComboBoxExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function ComboBoxExampleRender({
  setState,
  state: {
    props: {
      allowCustomEntry,
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      label,
      isRequired,
      value,
    },
  },
  innerRef,
}) {
  const { setState: setStateFormContext } = useFormContext();
  return (
    <div style={{ width: '80%' }}>
      <ComboBox
        allowCustomEntry={allowCustomEntry}
        className={className}
        errorMessage={errorMessage}
        id={id || 'combo-box-example-render-id'}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRequired={isRequired}
        label={label ?? ''}
        onChange={(newValue) => setState((draftState) => {
          draftState.props.value = newValue;
          setStateFormContext?.(
            (draftStateFormContext) => {
              // @ts-ignore
              draftStateFormContext['props.value'] = newValue;
            }
          );
        })}
        onClear={() => setState((draftState) => { draftState.props.value = ''; })}
        value={value}
      >
        <ComboBoxOption label="Arches National Park" value="arches" />
        <ComboBoxOption label="Bryce Canyon National Park" value="bryce" />
        <ComboBoxOption label="Canyonlands National Park" value="canyonlands" />
        <ComboBoxOption label="Capitol Reef National Park" value="capitol-reef" />
        <ComboBoxOption label="Zion National Park" value="zion" />
      </ComboBox>
    </div>
  );
}
