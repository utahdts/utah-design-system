// @ts-check
import {
  ComboBox,
  ComboBoxOption,
  useFormContext
} from '@utahdts/utah-design-system';
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
  const { setState: setStateFormContext } = useFormContext();
  return (
    <div style={{ width: '80%' }}>
      <ComboBox
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
          setStateFormContext?.((draftStateFormContext) => {
            draftStateFormContext['props.value'] = newValue;
          });
        })}
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
