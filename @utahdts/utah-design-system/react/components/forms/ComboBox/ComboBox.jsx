// @ts-check
import React, { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import joinClassNames from '../../../util/joinClassNames';
import { ComboBoxContextProvider } from './context/ComboBoxContextProvider';
import { CombBoxListBox } from './internal/CombBoxListBox';
import { ComboBoxTextInput } from './internal/ComboBoxTextInput';
import { useComboBoxContext } from './context/useComboBoxContext';

/** @typedef {import('../../../jsDocTypes').Event} Event */
/**
 * @template MutableRefT
 * @typedef {import('../../../jsDocTypes').MutableRef<MutableRefT>} MutableRef
 */

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {MutableRef<HTMLDivElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
 * @param {boolean} [props.isValueClearedOnSelection] after selection, is the value cleared so it appears to not be selected (multi-select uses this)
 * @param {boolean} [props.isWrapperSkipped] wrapper div is optional
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {() => void} [props.onClear]
 * @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp]
 * @param {() => void} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {HTMLElement | null} [props.popperContentRef] for multi-select the popup relates to the multi-select wrapper, not the input
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
  innerRef: draftInnerRef,
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
  popperContentRef,
  isValueClearedOnSelection,
  isWrapperSkipped,
  tagChildren,
  value,
  wrapperClassName,
  ...rest
}) {
  const comboBoxListId = useMemo(() => uuidv4(), []);
  const contentRef = useRef(/** @type {HTMLInputElement | null} */(null));

  const child = (
    <div className={joinClassNames('combo-box-input__inner-wrapper', className)}>
      {tagChildren}
      <ComboBoxTextInput
        comboBoxListId={comboBoxListId}
        errorMessage={errorMessage}
        id={id}
        innerRef={(ref) => {
          contentRef.current = ref;
        }}
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
      <CombBoxListBox
        id={comboBoxListId}
        ariaLabelledById={id}
        popperReferenceElement={popperContentRef ?? contentRef.current ?? null}
      >
        {children}
      </CombBoxListBox>
    </div>
  );

  return (
    <ComboBoxContextProvider
      comboBoxId={id}
      defaultValue={defaultValue}
      isValueClearedOnSelection={isValueClearedOnSelection}
      onChange={onChange}
      onClear={onClear}
      onKeyUp={onKeyUp}
      onSubmit={onSubmit}
      value={value}
    >
      {
        isWrapperSkipped
          ? child
          : (
            <div
              className={joinClassNames('input-wrapper input-wrapper--combo-box', wrapperClassName)}
              ref={draftInnerRef}
            >
              {child}
            </div>
          )
      }
    </ComboBoxContextProvider>
  );
}
