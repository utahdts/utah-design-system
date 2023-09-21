// @ts-check
import { RefShape, TextArea } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import TextAreaExamplePropsShape from '../../../../../../propTypesShapes/TextAreaExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TextAreaExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function TextAreaExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      id,
      isClearable,
      isDisabled,
      label,
      name,
      placeholder,
      isRequired,
      value,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }}>
      <TextArea
        className={className}
        errorMessage={errorMessage}
        id={id || 'text-area-example-render-id'}
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
        label={label || 'Text Area Label'}
        name={name}
        placeholder={placeholder}
        isRequired={isRequired}
        value={value}
      />
    </div>
  );
}

TextAreaExampleRender.propTypes = propTypes;
TextAreaExampleRender.defaultProps = defaultProps;

export default TextAreaExampleRender;
