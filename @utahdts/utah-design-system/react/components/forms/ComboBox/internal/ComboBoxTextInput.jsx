// @ts-check
import identity from 'lodash/identity';
import React, { useCallback } from 'react';
import useOnKeyUp from '../../../../util/useOnKeyUp';
import useFormContext from '../../FormContext/useFormContext';
import TextInput from '../../TextInput';
import useComboBoxContext from '../context/useComboBoxContext';
import { clearComboBoxSelection } from '../functions/clearComboBoxSelection';
import { moveComboBoxSelectionDown } from '../functions/moveComboBoxSelectionDown';
import { moveComboBoxSelectionUp } from '../functions/moveComboBoxSelectionUp';
import joinClassNames from '../../../../util/joinClassNames';

/** @typedef {import('../../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} props.comboBoxListId
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {React.MutableRefObject<HTMLInputElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
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
  innerRef: draftInnerRef,
  isClearable,
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

  return (
    <TextInput
      aria-activedescendant={optionValueFocusedId}
      aria-autocomplete="list"
      aria-controls={comboBoxListId}
      aria-expanded={isOptionsExpanded}
      aria-haspopup="listbox"
      aria-owns={comboBoxListId}
      className="combo-box-input"
      id={id}
      innerRef={(ref) => {
        const input = ref?.querySelector('input');
        textInputRef.current = input;
        if (draftInnerRef) {
          // eslint-disable-next-line no-param-reassign
          draftInnerRef.current = input;
        }
      }}
      isClearable={isClearable}
      isDisabled={isDisabled}
      errorMessage={errorMessage}
      // @ts-ignore
      onBlur={() => {
        // wait for combo box option to register that it has focus
        setTimeout(
          () => {
            setComboBoxContext((draftContext) => {
              if (!draftContext.optionValueFocused) {
                const selectedOption = options.find((option) => option.value === optionValueSelected);
                draftContext.filterValue = selectedOption?.label ?? '';
                draftContext.isFilterValueDirty = false;
                draftContext.isOptionsExpanded = false;
              }
            });
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
          ? ((e) => {
            if (onClear) {
              onClear(e);
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
          ? <span className={joinClassNames('combo-box-input__chevron utds-icon-before-chevron-up', isDisabled ? 'combo-box-input__chevron--is-disabled' : '')} aria-hidden="true" />
          : <span className={joinClassNames('combo-box-input__chevron utds-icon-before-chevron-down', isDisabled ? 'combo-box-input__chevron--is-disabled' : '')} aria-hidden="true" />
      }
      role="combobox"
      value={filterValue}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
