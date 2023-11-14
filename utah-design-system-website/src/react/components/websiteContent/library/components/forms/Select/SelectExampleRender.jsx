// @ts-check
import { Select, SelectOption } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').SelectExamplePropsShape} SelectExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: SelectExamplePropsShape}>} props.setState
 * @param {{props: SelectExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function SelectExampleRender({
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
