// @ts-check
/* eslint-disable react/prop-types */
import { ComboBox, ComboBoxOption, Select, SelectOption } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').ComboBoxExamplePropsShape} ComboBoxExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: ComboBoxExamplePropsShape}>} props.setState
 * @param {{props: ComboBoxExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function ComboBoxExampleRender({
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
      <ComboBox
        id={id || 'combo-box-example-render-id'}
        label={label ?? ''}
        onChange={(newValue) => setState((draftState) => {
          console.log('🚀 ~ file: ComboBoxExampleRender.jsx:38 ~ onChange={ ~ newValue:', newValue);
          draftState.props.value = newValue;
        })}
        value={value}
      >
        <ComboBoxOption label="Arches National Park" value="arches" />
        <ComboBoxOption label="Bryce Canyon National Park" value="bryce" />
        <ComboBoxOption label="Canyonlands National Park" value="canyonlands" />
        <ComboBoxOption label="Capitol Reef National Park" value="capitol-reef" />
        <ComboBoxOption label="Zion National Park" value="zion" />
      </ComboBox>
      <Select
        className={className}
        errorMessage={errorMessage}
        id={id || 'select-example-render-id'}
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
