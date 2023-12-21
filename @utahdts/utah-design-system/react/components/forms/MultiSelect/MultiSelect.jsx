// @ts-check
import React from 'react';
import { MultiSelectComboBox } from './MultiSelectComboBox';
import MultiSelectContextProvider from './context/MultiSelectContextProvider';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string[]} [props.defaultValues]
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {React.RefObject} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {((newValue: string[]) => void)} [props.onChange]
 * @param {() => void} [props.onClear]
 * @param {string} [props.placeholder]
 * @param {string[]} [props.values]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function MultiSelect({
  children,
  className,
  defaultValues,
  errorMessage,
  id,
  innerRef,
  isClearable,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  name,
  onChange,
  onClear,
  placeholder,
  values,
  wrapperClassName,
  ...rest
}) {
  return (
    <MultiSelectContextProvider
      defaultValues={defaultValues}
      multiSelectId={id}
      onChange={onChange}
      onClear={onClear}
      values={values}
    >
      <MultiSelectComboBox
        className={className}
        errorMessage={errorMessage}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRequired={isRequired}
        label={label}
        labelClassName={labelClassName}
        name={name}
        placeholder={placeholder}
        wrapperClassName={wrapperClassName}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </MultiSelectComboBox>
    </MultiSelectContextProvider>
  );
}
