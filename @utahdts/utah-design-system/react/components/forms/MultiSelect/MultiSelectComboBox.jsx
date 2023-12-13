// @ts-check
import { uniq } from 'lodash';
import React from 'react';
import useAriaMessaging from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import useRefAlways from '../../../hooks/useRefAlways';
import joinClassNames from '../../../util/joinClassNames';
import { ComboBox } from '../ComboBox/ComboBox';
import ErrorMessage from '../ErrorMessage';
import RequiredStar from '../RequiredStar';
import { MultiSelectClearIcon } from './MultiSelectClearIcon';
import { MultiSelectTags } from './MultiSelectTags';
import useMultiSelectContext from './context/useMultiSelectContext';

/**
 * @template MutableRefT
 * @typedef {import('../../../jsDocTypes').MutableRef<MutableRefT>} MutableRef
 */

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {MutableRef<HTMLDivElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {string} [props.placeholder]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function MultiSelectComboBox({
  children,
  className,
  errorMessage,
  innerRef: draftInnerRef,
  isClearable,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  name,
  placeholder,
  wrapperClassName,
  ...rest
}) {
  const [multiSelectContextValue, setMultiSelectContextValue, multiSelectContextNonStateRer] = useMultiSelectContext();
  const multiSelectContextValueRef = useRefAlways(multiSelectContextValue);
  const selectedValuesRef = useRefAlways(multiSelectContextValue.selectedValues);
  const { addPoliteMessage } = useAriaMessaging();

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper__multi-select', wrapperClassName)}
      ref={draftInnerRef}
    >
      <label htmlFor={multiSelectContextValue.multiSelectId} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>

      <div
        aria-describedby={errorMessage ? `${multiSelectContextValue.multiSelectId}-error` : undefined}
        aria-invalid={!!errorMessage}
        className={joinClassNames(
          (
            multiSelectContextValue.focusedValueTagIndex
            || multiSelectContextValue.focusedValueTagIndex === 0
            || multiSelectContextValue.textInputHasFocus
            || multiSelectContextValue.clearButtonHasFocus
          )
            ? 'multi-select--focused'
            : '',
          'multi-select',
          errorMessage && ''
        )}
        ref={(ref) => { multiSelectContextNonStateRer.current.comboBoxDivElement = ref; }}
      >
        <MultiSelectTags isDisabled={isDisabled} />
        <ComboBox
          className={joinClassNames(className, 'multi-select__combo-box')}
          id={multiSelectContextValue.multiSelectId}
          isDisabled={isDisabled}
          isRequired={isRequired}
          isWrapperSkipped
          label={label}
          labelClassName={joinClassNames('visually-hidden', labelClassName)}
          name={name}
          onChange={(newValue) => {
            multiSelectContextValue.onChange(uniq(selectedValuesRef.current.concat(newValue)));
          }}
          onKeyUp={(e, currentFilter) => {
            let eventIsHandled = false;
            // check that filter is blank and that there are options selected
            if (!currentFilter && multiSelectContextValueRef.current.selectedValues.length) {
              if (e.key === 'Backspace') {
                eventIsHandled = true;
                setMultiSelectContextValue((draftContext) => {
                  const deadTag = draftContext.selectedValues.pop();
                  addPoliteMessage(`${deadTag} removed`);
                });
                // close the combo box popup. the state of the popup being open is in the combobox context and has no external controls
                // but, it closes when the input blurs, so this is a big hack to make the popup close on blur
                const { activeElement } = document;
                // @ts-ignore
                activeElement?.blur();
                // @ts-ignore
                activeElement?.focus();
              }
              if (e.key === 'ArrowLeft') {
                eventIsHandled = true;
                setMultiSelectContextValue((draftContext) => {
                  draftContext.focusedValueTagIndex = draftContext.selectedValues.length - 1;
                });
              }
            }
            return eventIsHandled;
          }}
          placeholder={placeholder}
          popperContentRef={multiSelectContextNonStateRer.current.comboBoxDivElement}
          // the value is always unset because the multi-select will own and show the current value
          value=""
          wrapperClassName={wrapperClassName}
          // @ts-ignore
          isLabelSkipped // this gets spread down to the textInput so that there is only one label
          onFocus={() => setTimeout(() => setMultiSelectContextValue((draftContext) => { draftContext.textInputHasFocus = true; }), 0)}
          onBlur={() => setTimeout(() => setMultiSelectContextValue((draftContext) => { draftContext.textInputHasFocus = false; }), 0)}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        >
          {/* children has the multiselect options in it */}
          {children}
        </ComboBox>
        <MultiSelectClearIcon isClearable={isClearable} isDisabled={isDisabled} />
      </div>
      <ErrorMessage errorMessage={errorMessage} id={multiSelectContextValue.multiSelectId} />
    </div>
  );
}
