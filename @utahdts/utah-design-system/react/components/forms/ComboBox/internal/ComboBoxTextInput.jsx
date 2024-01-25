import { identity, isFunction } from 'lodash';
import { useCallback, useRef } from 'react';
import { useOnKeyUp } from '../../../../util/useOnKeyUp';
import { IconButton } from '../../../buttons/IconButton';
import { useFormContext } from '../../FormContext/useFormContext';
import { useMultiSelectContext } from '../../MultiSelect/context/useMultiSelectContext';
import { TextInput } from '../../TextInput';
import { useComboBoxContext } from '../context/useComboBoxContext';
import { clearComboBoxSelection } from '../functions/clearComboBoxSelection';
import { moveComboBoxSelectionDown } from '../functions/moveComboBoxSelectionDown';
import { moveComboBoxSelectionUp } from '../functions/moveComboBoxSelectionUp';
import { joinClassNames } from '../../../../util/joinClassNames';

/** @typedef {import('@utahdts/utah-design-system').EventAction} EventAction */
/**
 * @template MutableRefT
 * @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
 */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} props.comboBoxListId
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {MutableRef<HTMLInputElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {import('react').UIEventHandler} [props.onBlur]
 * @param {EventAction} [props.onClear]
 * @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp] return true if the key press was handled by this handler
 * @param {(() => void)} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function ComboBoxTextInput({
  className,
  comboBoxListId,
  errorMessage,
  id,
  innerRef: draftInnerRef,
  isClearable,
  isShowingClearableIcon,
  isDisabled,
  onBlur,
  onClear,
  onKeyUp,
  onSubmit,
  placeholder,
  ...rest
}) {
  const [multiSelectContext, , multiSelectContextRefs] = useMultiSelectContext();
  const { onSubmit: onSubmitFormContext } = useFormContext();
  const [
    {
      filterValue,
      isOptionsExpanded,
      onClear: onClearComboBoxContext,
      onKeyUp: onKeyUpFromContext,
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
  const clearIconRef = useRef(/** @type {HTMLButtonElement | null} */(null));

  // for backSpacing, the onChange event fires BEFORE the onKeyUp event so the filterValue was getting the changed value and not the previous value
  const onKeyUpPreviousValue = useRef('');

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
        isShowingClearableIcon={isShowingClearableIcon}
        errorMessage={errorMessage}
        // @ts-ignore
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
                    draftContext.filterValue = selectedOption?.label ?? '';
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
          setComboBoxContext((draftContext) => {
            draftContext.filterValue = e.target.value;
            draftContext.isFilterValueDirty = true;
          });
        }}
        onClear={
          isClearable
            ? (
              (e) => {
                if (onClear) {
                  // @ts-ignore
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
        // @ts-ignore
        onKeyDown={(e) => e.stopPropagation()}
        onKeyUp={(e) => {
          // @ts-ignore
          if (!onKeyUp?.(e, onKeyUpPreviousValue.current) && !onKeyUpFromContext?.(e, onKeyUpPreviousValue.current)) {
            if (![
              onCancelKeyPress(e),
              onUpArrowPress(e),
              onDownArrowPress(e),
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
        // @ts-ignore
        onSubmit={onSubmit ?? onSubmitFormContext}
        placeholder={placeholder}
        rightContent={(
          <IconButton
            aria-hidden="true"
            className="combo-box-input__chevron icon-button--borderless icon-button--small1x"
            icon={<span className={isOptionsExpanded ? 'utds-icon-before-chevron-up' : 'utds-icon-before-chevron-down'} aria-hidden="true" />}
            isDisabled={isDisabled}
            onClick={(e) => {
              e.stopPropagation();
              setComboBoxContext((draftContext) => {
                draftContext.isOptionsExpanded = !draftContext.isOptionsExpanded;
                textInputRef.current?.focus();
              });
            }}
            title="Toggle popup menu"
            // @ts-ignore
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
