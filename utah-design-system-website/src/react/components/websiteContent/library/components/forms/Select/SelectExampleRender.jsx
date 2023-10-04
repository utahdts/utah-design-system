// @ts-check
import { RefShape, Select, SelectOption } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import SelectExamplePropsShape from '../../../../../../propTypesShapes/SelectExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').SelectExamplePropsShape} SelectExamplePropsShape */

const propTypes = {
  innerRef: RefShape.isRequired,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: SelectExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: SelectExamplePropsShape}>} props.setState
 * @param {{props: SelectExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
function SelectExampleRender({
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

SelectExampleRender.propTypes = propTypes;
SelectExampleRender.defaultProps = defaultProps;

export default SelectExampleRender;
