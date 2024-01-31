import {
  MultiSelect,
  MultiSelectOption,
  useAriaMessaging,
  useFormContext
} from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';

/** @typedef {import('utah-design-system-website').MultiSelectExamplePropsShape} MultiSelectExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: MultiSelectExamplePropsShape}>} props.setState
 * @param {{props: MultiSelectExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement | null>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function MultiSelectExampleRender({
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
      values,
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
      <MultiSelect
        allowCustomEntry={allowCustomEntry}
        className={className}
        errorMessage={errorMessage}
        id={id || 'multi-select-example-render-id'}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRequired={isRequired}
        label={label ?? ''}
        onChange={(newValue) => setState((draftState) => {
          draftState.props.values = newValue;
          setStateFormContext?.((draftStateFormContext) => {
            // @ts-ignore
            draftStateFormContext['props.values'] = newValue;
          });
        })}
        onCustomEntry={
          (customValue) => {
            addPoliteMessage(`${customValue} has been added to the options list.`);
            setOptions((oldOptions) => oldOptions.concat({ label: customValue, value: customValue }));
          }
        }
        values={values}
      >
        {
          options.map((option) => (
            <MultiSelectOption key={`multi-select-example-render__option__${option.value}`} label={option.label} value={option.value} />
          ))
        }
      </MultiSelect>
    </div>
  );
}
