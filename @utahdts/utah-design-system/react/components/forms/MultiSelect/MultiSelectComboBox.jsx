import { uniq } from 'lodash';
import { useRef } from 'react';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { useRefAlways } from '../../../hooks/useRefAlways';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
import { ComboBox } from '../ComboBox/ComboBox';
import { ErrorMessage } from '../ErrorMessage';
import { RequiredStar } from '../RequiredStar';
import { MultiSelectClearIcon } from './MultiSelectClearIcon';
import { MultiSelectTags } from './MultiSelectTags';
import { useMultiSelectContext } from './context/useMultiSelectContext';

/**
 * @template MutableRefT
 * @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
 */

/** @typedef {import ('react').UIEventHandler} UIEventHandler */

/**
 * @param {object} props
 * @param {boolean} [props.allowCustomEntry] can the user type in their own items to add to the list?
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {MutableRef<HTMLDivElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {UIEventHandler} [props.onBlur]
 * @param {UIEventHandler} [props.onFocus]
 * @param {(customValue: string) => void} [props.onCustomEntry] caller is responsible for adding options when they are added
 * @param {string} [props.placeholder]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function MultiSelectComboBox({
  allowCustomEntry,
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
  onBlur,
  onCustomEntry,
  onFocus,
  placeholder,
  wrapperClassName,
  ...rest
}) {
  const [multiSelectContextValue, setMultiSelectContextValue, multiSelectContextNonStateRef] = useMultiSelectContext();
  const multiSelectContextValueRef = useRefAlways(multiSelectContextValue);
  const selectedValuesRef = useRefAlways(multiSelectContextValue.selectedValues);
  const { addPoliteMessage } = useAriaMessaging();
  const wrapperRef = useRef(/** @type {HTMLDivElement | null} */(null));

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper--multi-select', wrapperClassName)}
      ref={(ref) => {
        if (draftInnerRef) {
          if (typeof draftInnerRef === 'function') {
            draftInnerRef(ref);
          } else {
            draftInnerRef.current = ref;
          }
        }
        wrapperRef.current = ref;
      }}
    >
      <label htmlFor={multiSelectContextValue.multiSelectId} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>

      <div className="multi-select__wrapper">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          aria-describedby={errorMessage ? `${multiSelectContextValue.multiSelectId}-error` : undefined}
          className={joinClassNames(
            className,
            'multi-select',
            isClearable ? 'multi-select--clear-icon-visible' : '',
            isDisabled ? 'multi-select--disabled' : '',
            (
              multiSelectContextValue.focusedValueTagIndex
              || multiSelectContextValue.focusedValueTagIndex === 0
              || multiSelectContextValue.textInputHasFocus
              || multiSelectContextValue.clearButtonHasFocus
            )
              ? 'multi-select--focused'
              : '',
            errorMessage ? 'invalid' : null
          )}
          onClick={() => {
            if (multiSelectContextValue.isOptionsExpanded) {
              multiSelectContextNonStateRef?.current.textInput?.blur();
            } else {
              multiSelectContextNonStateRef?.current.textInput?.click();
            }
            multiSelectContextNonStateRef?.current.textInput?.focus();
          }}
          // prevent default so clicking doesn't cause focus to blur from textinput
          onMouseDown={(e) => e.preventDefault()}
          ref={(ref) => {
            if (multiSelectContextNonStateRef) {
              multiSelectContextNonStateRef.current.comboBoxDivElement = ref;
            }
          }}
        >
          <MultiSelectTags isDisabled={isDisabled} />
          <ComboBox
            allowCustomEntry={allowCustomEntry}
            className="multi-select__combo-box"
            id={multiSelectContextValue.multiSelectId}
            isDisabled={isDisabled}
            isInvalid={!!errorMessage}
            isRequired={isRequired}
            isValueClearedOnSelection
            isWrapperSkipped
            label={label}
            labelClassName={joinClassNames('visually-hidden', labelClassName)}
            name={name}
            onChange={(newValue) => {
              multiSelectContextValue.onChange(uniq(selectedValuesRef.current.concat(newValue)));
            }}
            onCustomEntry={onCustomEntry}
            onKeyUp={(e, currentFilter) => {
              let eventIsHandled = false;
              // check that filter is blank and that there are options selected
              if (!currentFilter && multiSelectContextValueRef.current.selectedValues.length) {
                // @ts-expect-error
                if (e.key === 'Backspace') {
                  eventIsHandled = true;
                  setMultiSelectContextValue((draftContext) => {
                    const deadTag = draftContext.selectedValues.pop();
                    addPoliteMessage(`${deadTag} removed`);
                  });
                  // close the combo box popup. the state of the popup being open is in the combobox context and has no external controls
                  // but, it closes when the input blurs, so this is a big hack to make the popup close on blur
                  const { activeElement } = document;
                  // @ts-expect-error
                  activeElement?.blur();
                  // @ts-expect-error
                  activeElement?.focus();
                }
                // @ts-expect-error
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
            popupContentRef={multiSelectContextNonStateRef?.current.comboBoxDivElement}
            // the value is always unset because the multi-select will own and show the current value
            value=""
            wrapperClassName={wrapperClassName}
            // @ts-expect-error
            isLabelSkipped // this gets spread down to the textInput so that there is only one label
            onFocus={
              /** @type {UIEventHandler} */ (
                (e) => {
                  onFocus?.(e);
                  setTimeout(() => setMultiSelectContextValue((draftContext) => { draftContext.textInputHasFocus = true; }), 0);
                }
              )
            }
            onBlur={
              /** @type {UIEventHandler} */ (
                (e) => {
                  onBlur?.(e);
                  setTimeout(
                    () => setMultiSelectContextValue((draftContext) => {
                      draftContext.textInputHasFocus = false;
                      if (!draftContext.clearButtonHasFocus) {
                        draftContext.isOptionsExpanded = false;
                      }
                    }),
                    0
                  );
                }
              )
            }
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          >
            {/* children has the multiselect options in it */}
            {children}
          </ComboBox>
          <MultiSelectClearIcon isClearable={isClearable} isDisabled={isDisabled} />
          <IconButton
            aria-hidden="true"
            className={joinClassNames(
              'multi-select__chevron',
              'icon-button--borderless',
              'icon-button--small1x',
              isDisabled ? 'multi-select__chevron--is-disabled' : ''
            )}
            icon={<span className={multiSelectContextValue.isOptionsExpanded ? 'utds-icon-before-chevron-up' : 'utds-icon-before-chevron-down'} aria-hidden="true" />}
            isDisabled={isDisabled}
            onClick={() => {
              if (multiSelectContextValue.isOptionsExpanded) {
                multiSelectContextNonStateRef?.current.textInput?.blur();
                multiSelectContextNonStateRef?.current.textInput?.focus();
              } else {
                multiSelectContextNonStateRef?.current.textInput?.click();
              }
            }}
            title="Toggle popup menu"
            // @ts-expect-error
            onBlur={() => {
              // tabbing off of toggle icon while the popup options list was open was not closing the list
              // because the list didn't get focus when it was opened by a click
              setTimeout(
                () => {
                  const { activeElement } = document;
                  multiSelectContextNonStateRef?.current.textInput?.focus();
                  // @ts-expect-error
                  activeElement?.focus();
                },
                100
              );
            }}
            // @ts-expect-error
            onMouseDown={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <ErrorMessage errorMessage={errorMessage} id={multiSelectContextValue.multiSelectId} />
    </div>
  );
}
