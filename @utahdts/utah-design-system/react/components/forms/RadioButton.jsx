// @ts-check
/* eslint-disable react/prop-types */
import React from 'react';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import joinClassNames from '../../util/joinClassNames';
import ErrorMessage from './ErrorMessage';
import RequiredStar from './RequiredStar';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {React.RefObject} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isChecked]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {EventAction} [props.onChange]
 * @param {(() => void)} [props.onSubmit]
 * @param {string} props.value the html radio button's value to put in to the form data if this radio button is selected
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function RadioButton({
  className,
  defaultValue,
  errorMessage,
  id,
  isChecked,
  isDisabled = false,
  isRequired = false,
  innerRef,
  label,
  labelClassName,
  name,
  onChange,
  onSubmit,
  value,
  wrapperClassName,
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
    value: isChecked ? value : undefined,
  });

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--radio', wrapperClassName)}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <input
        aria-describedby={currentErrorMessage ? `${id}-error` : undefined}
        checked={currentValue === value}
        className={className}
        disabled={isDisabled}
        id={id}
        name={name || id}
        // @ts-ignore
        onChange={(e) => currentOnChange(e)}
        // @ts-ignore
        onKeyUp={(e) => currentOnFormKeyPress(e)}
        ref={innerRef}
        required={isRequired}
        type="radio"
        {...rest}
      />
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}
