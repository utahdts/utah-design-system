// @ts-check
import { CheckBox, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import CheckboxExamplePropsShape from '../../../../../../propTypesShapes/CheckboxExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: CheckboxExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function CheckboxExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isDisabled,
      label,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div ref={innerRef}>
      <CheckBox
        className={className}
        errorMessage={errorMessage}
        onChange={() => setState((draftState) => {
          draftState.props.value = !draftState.props.value;
        })}
        id={id || 'checkbox-example-render-id'}
        isDisabled={isDisabled}
        label={label || 'Checkbox Label'}
        value={value}
      />
    </div>
  );
}

CheckboxExampleRender.propTypes = propTypes;
CheckboxExampleRender.defaultProps = defaultProps;

export default CheckboxExampleRender;
