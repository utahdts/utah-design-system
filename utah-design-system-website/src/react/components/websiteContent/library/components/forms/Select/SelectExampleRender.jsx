import { Select, SelectOption } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').SelectExamplePropsShape} SelectExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: SelectExamplePropsShape}>} props.setState
 * @param {{props: SelectExamplePropsShape}} props.state
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @returns {JSX.Element}
 */
export function SelectExampleRender({
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
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <Select
        className={className}
        errorMessage={errorMessage}
        id={id}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        onChange={
          /** @param {React.BaseSyntheticEvent} e */
          (e) => setState((draftState) => {
            draftState.props.value = e.target.value;
          })
        }
        onClear={
          isClearable
            ? (
              () => setState((draftState) => {
                draftState.props.value = '';
              })
            )
            : undefined
        }
        label={label ?? ''}
        isRequired={isRequired}
        placeholder={'Choose favorite "Mighty 5"'}
        value={value}
      >
        <SelectOption label="Arches National Park" value="arches" />
        <SelectOption label="Bryce Canyon National Park" value="bryce" />
        <SelectOption label="Canyonlands National Park" value="canyonlands" />
        <SelectOption label="Capitol Reef National Park" value="capitol-reef" />
        <SelectOption label="Zion National Park" value="zion" />
      </Select>
    </div>
  );
}
