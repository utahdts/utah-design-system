import {
  ComboBox,
  ComboBoxOption,
  useAriaMessaging,
  useFormContext
} from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';

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
  const { addPoliteMessage } = useAriaMessaging();
  const { setState: setStateFormContext } = useFormContext();
  const [options, setOptions] = useImmer(() => [
    { label: 'Arches National Park', value: 'arches' },
    { label: 'Bryce Canyon National Park', value: 'bryce' },
    { label: 'Canyonlands National Park', value: 'canyonlands' },
    { label: 'Capitol Reef National Park', value: 'capitol-reef' },
    { label: 'Zion National Park', value: 'zion' },
  ]);
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
        onCustomEntry={
          (customValue) => {
            addPoliteMessage('Item has been added.');
            setOptions((oldOptions) => oldOptions.concat({ label: customValue, value: customValue }));
          }
        }
        value={value}
        // @ts-ignore
        autoComplete="off"
      >
        {
          options.map((option) => (
            <ComboBoxOption key={`combo-box-example-render__option__${option.value}`} label={option.label} value={option.value} />
          ))
        }
      </ComboBox>
    </div>
  );
}
