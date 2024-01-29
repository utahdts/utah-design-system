import { useId, useRef } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { ComboBoxContextProvider } from './context/ComboBoxContextProvider';
import { CombBoxListBox } from './internal/CombBoxListBox';
import { ComboBoxTextInput } from './internal/ComboBoxTextInput';

/** @typedef {import('@utahdts/utah-design-system').Event} Event */
/**
 * @template MutableRefT
 * @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
 */

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
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
 * @param {import('react').ReactNode} [props.tagChildren]
 * @param {string} [props.textInputClassName] className to put on the TextInput
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
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
  textInputClassName,
  value,
  wrapperClassName,
  ...rest
}) {
  const comboBoxListId = useId();
  const contentRef = useRef(/** @type {HTMLInputElement | null} */(null));

  const child = (
    <div className={joinClassNames('combo-box-input__inner-wrapper', className)}>
      {tagChildren}
      <ComboBoxTextInput
        className={textInputClassName}
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
      // @ts-ignore
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
