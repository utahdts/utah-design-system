// @ts-check
/* eslint-disable react/prop-types */
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import ErrorMessage from '../ErrorMessage';
import RequiredStar from '../RequiredStar';
import RadioButtonGroupContextProvider from './context/RadioButtonGroupContextProvider';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.defaultValue] starting value if not controlled
 * @param {string} [props.errorMessage]
 * @param {string} props.id // the field id for the form to put hte value in to the form
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {(newValue: string) => void} [props.onChange] respond to changes of current value if controlled
 * @param {string} [props.value] value of the currently selected Radio Button if controlled
 * @returns {JSX.Element}
 */
export function RadioButtonGroup({
  children,
  className,
  defaultValue,
  errorMessage,
  id,
  isRequired,
  label,
  onChange,
  value,
}) {
  return (
    <>
      <fieldset id={id} className={joinClassNames('fieldset fieldset--radio-wrapper', className)}>
        {isRequired ? <RequiredStar /> : null}
        <legend>{label}</legend>
        <RadioButtonGroupContextProvider
          defaultValue={defaultValue}
          name={id}
          onChange={onChange}
          value={value}
        >
          {children}
        </RadioButtonGroupContextProvider>
      </fieldset>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </>
  );
}
