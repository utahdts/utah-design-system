// @ts-check
import identity from 'lodash/identity';
import React, { useCallback, useRef } from 'react';
import useOnKeyUp from '../../../../util/useOnKeyUp';
import useFormContext from '../../FormContext/useFormContext';
import TextInput from '../../TextInput';
import useComboBoxContext from '../context/useComboBoxContext';
import { clearComboBoxSelection } from '../functions/clearComboBoxSelection';
import { moveComboBoxSelectionDown } from '../functions/moveComboBoxSelectionDown';
import { moveComboBoxSelectionUp } from '../functions/moveComboBoxSelectionUp';

/** @typedef {import('../../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.comboBoxListId
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {EventAction} [props.onClear]
 * @param {(() => void)} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export default function ComboBoxTextInput({
  comboBoxListId,
  errorMessage,
  id,
  isClearable,
  isShowingClearableIcon,
  isDisabled,
  onClear,
  onSubmit,
  placeholder,
  ...rest
}) {
  const { onSubmit: onSubmitFormContext } = useFormContext();
  const [
    {
      filterValue,
      isOptionsExpanded,
      onClear: onClearFromContext,
      options,
      optionValueFocusedId,
      optionValueSelected,
    },
    setComboBoxContext,
    textInputRef,
  ] = useComboBoxContext();

  const onCancelKeyPress = useOnKeyUp('Escape', useCallback(() => isClearable && setComboBoxContext(clearComboBoxSelection), [isClearable, setComboBoxContext]));
  const onUpArrowPress = useOnKeyUp('ArrowUp', useCallback(() => setComboBoxContext((draftContext) => moveComboBoxSelectionUp(draftContext, textInputRef)), [setComboBoxContext, textInputRef]));
  const onDownArrowPress = useOnKeyUp('ArrowDown', useCallback(() => setComboBoxContext(moveComboBoxSelectionDown), [setComboBoxContext]));
  const clearIconRef = useRef(/** @type {HTMLButtonElement | null} */(null));

  return (
    <div>
      <TextInput
        aria-activedescendant={optionValueFocusedId}
        aria-autocomplete="list"
        aria-controls={comboBoxListId}
        aria-expanded={isOptionsExpanded}
        aria-haspopup="listbox"
        aria-owns={comboBoxListId}
        // TODO: what is the right classname for the chevron?
        className="text-input--clear-icon-visible"
        clearIconRef={clearIconRef}
        id={id}
        innerRef={(ref) => { textInputRef.current = ref?.querySelector('input'); }}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isShowingClearableIcon={isShowingClearableIcon}
        errorMessage={errorMessage}
        // @ts-ignore
        onBlur={() => {
          // wait for combo box option to register that it has focus
          setTimeout(
            () => {
              // clicking the "x" clear icon button takes focus away from the text input and on to the x-button
              // without checking if the clear button has focus, this was trumping the clear button's onclick
              if (clearIconRef.current !== document.activeElement) {
                setComboBoxContext((draftContext) => {
                  if (!draftContext.optionValueFocused) {
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
          isShowingClearableIcon
            ? ((e) => {
              if (onClear) {
                onClear(e);
              } else if (onClearFromContext) {
                onClearFromContext();
              } else {
                setComboBoxContext((draftContext) => {
                  draftContext.filterValue = '';
                  draftContext.isFilterValueDirty = false;
                  draftContext.isOptionsExpanded = false;
                  draftContext.optionValueHighlighted = null;
                  draftContext.optionValueSelected = null;
                });
              }
            })
            : undefined
        }
        onClick={() => {
          setComboBoxContext((draftContext) => {
            draftContext.isOptionsExpanded = true;
          });
        }}
        onKeyUp={(e) => {
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
        }}
        onSubmit={onSubmit ?? onSubmitFormContext}
        placeholder={placeholder}
        rightContent={
          isOptionsExpanded
            ? <span className="utds-icon-before-chevron-up" aria-hidden="true" />
            : <span className="utds-icon-before-chevron-down" aria-hidden="true" />
        }
        role="combobox"
        value={filterValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </div>
  );
}
