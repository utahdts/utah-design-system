// @ts-check
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import { RadioButtonsContext } from './util/RadioButtonsContext';
import RefShape from '../../../propTypesShapes/RefShape';
import useCurrentValuesFromForm from '../../../hooks/forms/useCurrentValuesFromForm';
import ErrorMessage from '../ErrorMessage';
import RequiredStar from '../RequiredStar';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  defaultValue: null,
  errorMessage: null,
  innerRef: null,
  isRequired: false,
  onChange: null,
  onSubmit: null,
  value: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {string} props.id
 * @param {React.RefObject | null} [props.innerRef]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {EventAction | null} [props.onChange]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {string | null} [props.value]
 * @returns {JSX.Element}
 */
export function RadioButtonsWrapper({
  children,
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isRequired,
  label,
  onChange,
  onSubmit,
  value,
}) {
  const {
    currentErrorMessage,
    currentOnChange,
    currentOnFormKeyPress,
    currentValue,
  } = useCurrentValuesFromForm({
    defaultValue,
    errorMessage,
    id,
    onChange,
    onSubmit,
    value,
  });

  const contextValue = useMemo(
    () => ({
      currentOnChange,
      currentValue,
      currentOnFormKeyPress,
    }),
    [currentOnChange, currentValue, currentOnFormKeyPress]
  );

  return (
    <RadioButtonsContext.Provider value={contextValue}>
      <div className={joinClassNames(className, 'radio-buttons-wrapper')} ref={innerRef} id={id}>
        <fieldset>
          <legend>
            {label}
            {isRequired ? <RequiredStar /> : null}
          </legend>
          {children}
        </fieldset>
        <ErrorMessage errorMessage={currentErrorMessage} id={id} />
      </div>
    </RadioButtonsContext.Provider>
  );
}

RadioButtonsWrapper.propTypes = propTypes;
RadioButtonsWrapper.defaultProps = defaultProps;
