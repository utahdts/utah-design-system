// @ts-check
import React, { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import joinClassNames from '../../../util/joinClassNames';
import ComboBoxContextProvider from './context/ComboBoxContextProvider';
import CombBoxListBox from './internal/CombBoxListBox';
import ComboBoxTextInput from './internal/ComboBoxTextInput';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {React.RefObject} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {() => void} [props.onClear]
 * @param {() => void} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export default function ComboBox({
  children,
  className,
  defaultValue,
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
  onSubmit,
  placeholder,
  value,
  wrapperClassName,
  ...rest
}) {
  const comboBoxListId = useMemo(() => uuidv4(), []);
  const contentRef = useRef(/** @type {HTMLInputElement | null} */(null));

  return (
    <ComboBoxContextProvider
      comboBoxId={id}
      defaultValue={defaultValue}
      onChange={onChange}
      onClear={onClear}
      onSubmit={onSubmit}
      value={value}
    >
      <div className={joinClassNames('input-wrapper input-wrapper--combo-box', wrapperClassName)} ref={innerRef}>
        <div className={joinClassNames('combo-box-input__inner-wrapper', className)}>
          <ComboBoxTextInput
            comboBoxListId={comboBoxListId}
            errorMessage={errorMessage}
            id={id}
            innerRef={contentRef}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            labelClassName={labelClassName}
            name={name}
            placeholder={placeholder}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
          <CombBoxListBox id={comboBoxListId} ariaLabelledById={id} popperReferenceElementRef={contentRef}>
            {children}
          </CombBoxListBox>
        </div>
      </div>
    </ComboBoxContextProvider>
  );
}
