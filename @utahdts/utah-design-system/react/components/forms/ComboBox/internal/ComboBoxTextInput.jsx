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
import { selectComboBoxSelection } from '../functions/selectComboBoxSelection';

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
      optionValueSelected,
      textInputRef,
    },
    setComboBoxContext,
  ] = useComboBoxContext();

  const onEnterKeyPress = useOnKeyUp(
    'Enter',
    useCallback(
      () => setComboBoxContext((draftContext) => selectComboBoxSelection(draftContext, onSubmit ?? onSubmitFormContext)),
      [setComboBoxContext, onSubmit, onSubmitFormContext]
    )
  );
  const onCancelKeyPress = useOnKeyUp('Escape', useCallback(() => isClearable && setComboBoxContext(clearComboBoxSelection), [isClearable, setComboBoxContext]));
  const onUpArrowPress = useOnKeyUp('ArrowUp', useCallback(() => setComboBoxContext(moveComboBoxSelectionUp), [setComboBoxContext]));
  const onDownArrowPress = useOnKeyUp('ArrowDown', useCallback(() => setComboBoxContext(moveComboBoxSelectionDown), [setComboBoxContext]));

  return (
    <div>
      <TextInput
        aria-autocomplete="list"
        aria-controls={comboBoxListId}
        aria-expanded={isOptionsExpanded}
        id={id}
        innerRef={(ref) => setComboBoxContext((draftContext) => {
          draftContext.textInputRef = ref;
        })}
        isClearable={isClearable}
        isDisabled={isDisabled}
        errorMessage={errorMessage}
        // @ts-ignore
        onBlur={() => {
          const selectedOption = options.find((option) => option.value === optionValueSelected);
          setComboBoxContext((draftContext) => {
            // TODO: set to label not value
            draftContext.filterValue = selectedOption?.label ?? '';
            draftContext.isFilterValueDirty = false;
            draftContext.isOptionsExpanded = false;
          });
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
            onEnterKeyPress(e),
            onCancelKeyPress(e),
            onUpArrowPress(e),
            onDownArrowPress(e),
          ].some(identity)) {
            if (!['Tab', 'Shift', 'ShiftLeft', 'ShiftRight'].includes(e.key)) {
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
        role="combobox"
        value={filterValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </div>
  );
}
