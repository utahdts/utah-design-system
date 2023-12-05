// @ts-check
import React, { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import joinClassNames from '../../../util/joinClassNames';
import { ComboBoxContextProvider } from './context/ComboBoxContextProvider';
import { CombBoxListBox } from './internal/CombBoxListBox';
import { ComboBoxTextInput } from './internal/ComboBoxTextInput';

/** @typedef {import('../../../jsDocTypes').Event} Event */

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
 * @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {() => void} [props.onClear]
 * @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp]
 * @param {() => void} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {React.ReactNode} [props.tagChildren]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function ComboBox({
  children,
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isClearable,
  isDisabled,
  isRequired,
  isShowingClearableIcon,
  label,
  labelClassName,
  name,
  onChange,
  onClear,
  onKeyUp,
  onSubmit,
  placeholder,
  tagChildren,
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
      onKeyUp={onKeyUp}
      onSubmit={onSubmit}
      value={value}
    >
      <div className={joinClassNames('input-wrapper input-wrapper--combo-box', wrapperClassName)} ref={innerRef}>
        <div className={joinClassNames('combo-box-input__inner-wrapper', className)}>
          {tagChildren}
          <ComboBoxTextInput
            comboBoxListId={comboBoxListId}
            errorMessage={errorMessage}
            id={id}
            innerRef={contentRef}
            isClearable={isClearable}
            isShowingClearableIcon={isShowingClearableIcon}
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
