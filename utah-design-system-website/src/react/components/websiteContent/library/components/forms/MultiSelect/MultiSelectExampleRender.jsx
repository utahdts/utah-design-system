import {
  MultiSelect,
  MultiSelectOption,
  useFormContext
} from '@utahdts/utah-design-system';

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
  const { setState: setStateFormContext } = useFormContext();
  return (
    <div style={{ width: '80%' }}>
      <MultiSelect
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
        values={values}
        // @ts-ignore
        autoComplete="off"
      >
        <MultiSelectOption label="Arches" value="arches" />
        <MultiSelectOption label="Bryce Canyon" value="bryce" />
        <MultiSelectOption label="Canyonlands" value="canyonlands" />
        <MultiSelectOption label="Capitol Reef" value="capitol-reef" />
        <MultiSelectOption label="Zion" value="zion" />
      </MultiSelect>
    </div>
  );
}
