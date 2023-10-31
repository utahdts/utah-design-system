// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import RequiredStar from './RequiredStar';
import joinClassNames from '../../util/joinClassNames';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import ErrorMessage from './ErrorMessage';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};
const defaultProps = {
  className: null,
  defaultValue: null,
  errorMessage: null,
  isDisabled: false,
  isRequired: false,
  innerRef: null,
  labelClassName: null,
  name: null,
  onChange: null,
  onSubmit: null,
  value: null,
  wrapperClassName: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {boolean | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {string | null} [props.name]
 * @param {EventAction | null} [props.onChange]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {string | null} [props.value]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function RadioButton({
  className = null,
  defaultValue,
  errorMessage,
  id,
  isDisabled = false,
  isRequired = false,
  innerRef = null,
  label,
  labelClassName = null,
  name = null,
  onChange,
  onSubmit,
  value = null,
  wrapperClassName = null,
  ...rest
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

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--radio', wrapperClassName)}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <input
        aria-describedby={currentErrorMessage ? `${id}-error` : null}
        checked={currentValue}
        className={className}
        disabled={isDisabled}
        id={id}
        name={name || id}
        onChange={currentOnChange}
        onKeyPress={currentOnFormKeyPress}
        ref={innerRef}
        required={isRequired}
        type="radio"
        {...rest}
      />
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
