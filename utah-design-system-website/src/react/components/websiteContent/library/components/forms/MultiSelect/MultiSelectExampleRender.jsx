// @ts-check
import {
  MultiSelect,
  MultiSelectOption,
  useFormContext
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').MultiSelectExamplePropsShape} MultiSelectExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: MultiSelectExamplePropsShape}>} props.setState
 * @param {{props: MultiSelectExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function MultiSelectExampleRender({
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
            draftStateFormContext['props.values'] = newValue;
          });
        })}
        values={values}
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
