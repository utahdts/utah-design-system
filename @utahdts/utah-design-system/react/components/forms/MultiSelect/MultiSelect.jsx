// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import { MultiSelectClearIcon } from './MultiSelectClearIcon';
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
  innerRef: draftInnerRef,
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
      multiSelectId={id}
      defaultValues={defaultValues}
      onChange={onChange}
      onClear={onClear}
      values={values}
    >
      <div
        className={wrapperClassName}
        ref={draftInnerRef}
      >
        <MultiSelectComboBox
          className={joinClassNames('multi-select', className)}
          errorMessage={errorMessage}
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
        <MultiSelectClearIcon isClearable={isClearable} isDisabled={isDisabled} />
      </div>
    </MultiSelectContextProvider>
  );
}
