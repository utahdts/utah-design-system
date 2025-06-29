import { identity, isFunction } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import { joinClassNames } from '../../../../util/joinClassNames';
import { useOnKeyUp } from '../../../../util/useOnKeyUp';
import { IconButton } from '../../../buttons/IconButton';
import { useMultiSelectContext } from '../../MultiSelect/context/useMultiSelectContext';
import { TextInput } from '../../TextInput';
import { useComboBoxContext } from '../context/useComboBoxContext';
import { clearComboBoxSelection } from '../functions/clearComboBoxSelection';
import { moveComboBoxSelectionDown } from '../functions/moveComboBoxSelectionDown';
import { moveComboBoxSelectionUp } from '../functions/moveComboBoxSelectionUp';

/** @typedef {import('@utahdts/utah-design-system').EventAction} EventAction */
/**
 * @template MutableRefT
 * @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
 */

/**
 * @param {object} props
 * @param {boolean} [props.allowCustomEntry]
 * @param {string} [props.className]
 * @param {string} props.comboBoxListId
 * @param {string} [props.errorMessage]
 * @param {(isOptionsExpanded: boolean) => React.ReactNode} [props.iconCallback] Can provide a custom icon to show for the popup icon
 * @param {string} props.id
 * @param {MutableRef<HTMLInputElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isInvalid]
 * @param {boolean} [props.isRequired]
 * @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {import('react').UIEventHandler} [props.onBlur]
 * @param {EventAction} [props.onClear]
 * @param {(customValue: string) => void} [props.onCustomEntry]
 * @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp] return true if the key press was handled by this handler
 * @param {string} [props.placeholder]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function ComboBoxTextInput({
  allowCustomEntry,
  className,
  comboBoxListId,
  errorMessage,
  iconCallback,
  id,
  innerRef: draftInnerRef,
  isClearable,
  isInvalid,
  isShowingClearableIcon,
  isDisabled,
  onBlur,
  onClear,
  onCustomEntry,
  onKeyUp,
  placeholder,
  ...rest
}) {
  const [multiSelectContext, , multiSelectContextRefs] = useMultiSelectContext();
  const [
    {
      filterValue,
      isOptionsExpanded,
      onClear: onClearComboBoxContext,
      onKeyUp: onKeyUpFromContext,
      onChange,
      options,
      optionValueFocusedId,
      optionValueSelected,
    },
    setComboBoxContext,
    comboBoxContextNonStateRef,
  ] = useComboBoxContext();

  const onCancelKeyPress = useOnKeyUp('Escape', useCallback(() => isClearable && setComboBoxContext(clearComboBoxSelection), [isClearable, setComboBoxContext]));
  const onUpArrowPress = useOnKeyUp(
    'ArrowUp',
    useCallback(
      () => setComboBoxContext(
        (draftContext) => moveComboBoxSelectionUp(draftContext, comboBoxContextNonStateRef.current.textInput, multiSelectContext)
      ),
      [comboBoxContextNonStateRef, multiSelectContext, setComboBoxContext]
    )
  );
  const onDownArrowPress = useOnKeyUp(
    'ArrowDown',
    useCallback(
      () => {
        // if there are no options left from which to pick, don't open menu
        if (multiSelectContext.selectedValues.length !== options.filter((option) => !option.isGroupLabel).length) {
          setComboBoxContext((draftContext) => moveComboBoxSelectionDown(draftContext, multiSelectContext));
        }
      },
      [multiSelectContext, options, setComboBoxContext]
    )
  );
  const onEnterPress = useOnKeyUp(
    'Enter',
    useCallback(
      /** @param {React.KeyboardEvent<HTMLInputElement>} e */
      (e) => {
        /** @type {HTMLInputElement} */
        // @ts-expect-error
        const { target } = e;
        const currentTextInputValue = /** @type {string} */ (target.value);
        const currentTextInputValueLowerCase = currentTextInputValue.toLowerCase();

        // if already have entered this custom item or if it matches an existing option, don't add it again.
        const matchingOption = options.find((option) => option.labelLowerCase === currentTextInputValueLowerCase);

        // redundant to check the allowCustomEntry flag, but lends to better readability
        if (!matchingOption && allowCustomEntry) {
          // let caller know a new option has been added
          onCustomEntry?.(currentTextInputValue);

          // let caller know the new option is also selected
          onChange(currentTextInputValue);

          // close expanded options after selection since normally have to press enter on the Select Option and it closes popup
          setComboBoxContext((draftContext) => {
            draftContext.isOptionsExpanded = false;
          });
        }
      },
      [allowCustomEntry, multiSelectContext, options, setComboBoxContext]
    )
  );
  const clearIconRef = useRef(/** @type {HTMLButtonElement | null} */(null));

  // for backSpacing, the onChange event fires BEFORE the onKeyUp event so the filterValue was getting the changed value and not the previous value
  const onKeyUpPreviousValue = useRef('');

  useEffect(
    () => {
      // had something selected, and no longer have something selected, so clear filter value so that the input shows no value
      if (!optionValueSelected) {
        setComboBoxContext((draftContext) => {
          draftContext.filterValue = '';
        });
      }
    },
    [optionValueSelected]
  );

  const textInputRef = useRef(/** @type {HTMLInputElement | null} */(null));
  return (
    <div>
      <TextInput
        aria-activedescendant={optionValueFocusedId}
        aria-autocomplete="list"
        aria-controls={comboBoxListId}
        aria-expanded={isOptionsExpanded}
        aria-haspopup="listbox"
        aria-owns={comboBoxListId}
        className={joinClassNames('combo-box-input', className)}
        clearIconRef={clearIconRef}
        id={id}
        innerRef={(ref) => {
          const input = ref?.querySelector('input') ?? null;
          textInputRef.current = input;
          comboBoxContextNonStateRef.current.textInput = input;
          if (multiSelectContextRefs) {
            multiSelectContextRefs.current.textInput = input;
          }
          if (draftInnerRef) {
            if (isFunction(draftInnerRef)) {
              draftInnerRef(input);
            } else {
              draftInnerRef.current = input;
            }
          }
        }}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isInvalid={!!errorMessage || isInvalid}
        isShowingClearableIcon={isShowingClearableIcon}
        errorMessage={errorMessage}
        // @ts-expect-error
        onBlur={(e) => {
          onBlur?.(e);
          onKeyUpPreviousValue.current = filterValue;
          // wait for combo box option to register that it has focus
          setTimeout(
            () => {
              // clicking the "x" clear icon button takes focus away from the text input and on to the x-button
              // without checking if the clear button has focus, this was trumping the clear button's onclick
              if (clearIconRef.current !== document.activeElement) {
                setComboBoxContext((draftContext) => {
                  // ul is focused, with no option focused, if clicking on the scroll-bar for the ul (ul has max-height and auto overflow)
                  if (
                    !draftContext.optionValueFocused
                    && !document.activeElement?.classList.contains('combo-box-input__list-box')
                    && !document.activeElement?.classList.contains('multi-select__chevron')
                  ) {
                    const selectedOption = options.find((option) => option.value === optionValueSelected);
                    draftContext.filterValue = selectedOption?.label ?? optionValueSelected ?? '';
                    draftContext.isFilterValueDirty = false;
                    draftContext.isOptionsExpanded = false;
                  }
                });
              }
            },
            1
          );
        }}
        onChange={(e) => {
          const newValue = e.target.value;
          setComboBoxContext((draftContext) => {
            draftContext.filterValue = newValue;
            draftContext.isFilterValueDirty = true;
          });
        }}
        onClear={
          isClearable
            ? (
              (e) => {
                if (onClear) {
                  // @ts-expect-error
                  onClear(e);
                } else if (onClearComboBoxContext) {
                  onClearComboBoxContext();
                  setComboBoxContext((draftContext) => {
                    draftContext.filterValue = '';
                    draftContext.isFilterValueDirty = false;
                  });
                } else {
                  setComboBoxContext((draftContext) => {
                    draftContext.filterValue = '';
                    draftContext.isFilterValueDirty = false;
                    draftContext.isOptionsExpanded = false;
                    draftContext.optionValueHighlighted = null;
                    draftContext.optionValueSelected = null;
                  });
                }
              }
            )
            : undefined
        }
        onClick={() => {
          setComboBoxContext((draftContext) => {
            draftContext.isOptionsExpanded = true;
          });
        }}
        // @ts-expect-error
        onKeyDown={(e) => e.stopPropagation()}
        onKeyUp={(e) => {
          // @ts-expect-error
          if (!onKeyUp?.(e, onKeyUpPreviousValue.current) && !onKeyUpFromContext?.(e, onKeyUpPreviousValue.current)) {
            if (![
              onCancelKeyPress(e),
              onUpArrowPress(e),
              onDownArrowPress(e),
              allowCustomEntry && onEnterPress(e),
            ].some(identity)) {
              if (!['Alt', 'Control', 'Meta', 'Tab', 'Shift', 'ShiftLeft', 'ShiftRight'].includes(e.key)) {
                setComboBoxContext((draftContext) => {
                  if (draftContext.filterValue) {
                    // if key wasn't one of the others, expand the options
                    draftContext.isOptionsExpanded = true;
                  } else {
                    draftContext.isFilterValueDirty = false;
                  }
                });
              }
            }
          }
          onKeyUpPreviousValue.current = filterValue;
        }}
        placeholder={placeholder}
        rightContent={(
          <IconButton
            className="combo-box-input__chevron icon-button--borderless icon-button--small1x"
            icon={
              iconCallback?.(isOptionsExpanded)
              ?? (
                <span
                  aria-hidden="true"
                  className={isOptionsExpanded ? 'utds-icon-before-chevron-up' : 'utds-icon-before-chevron-down'}
                />
              )
            }
            isDisabled={isDisabled}
            onClick={(e) => {
              e.stopPropagation();
              setComboBoxContext((draftContext) => {
                draftContext.isOptionsExpanded = !draftContext.isOptionsExpanded;
                textInputRef.current?.focus();
              });
            }}
            title="Toggle popup menu"
            // @ts-expect-error
            // prevent the chevron from closing and reopening the popup
            onMouseDown={(e) => e.preventDefault()}
          />
        )}
        role="combobox"
        value={filterValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </div>
  );
}
