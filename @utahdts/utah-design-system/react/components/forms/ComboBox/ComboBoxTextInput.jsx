// @ts-check
/* eslint-disable react/prop-types */
import identity from 'lodash/identity';
import React, { useCallback } from 'react';
import useOnKeyPress from '../../../util/useOnKeyPress';
import TextInput from '../TextInput';
import useFormContext from '../useFormContext';
import useComboBoxContext from './useComboBoxContext';

/** @typedef {import('../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string} props.comboBoxListId
 * @param {string | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {string} props.id
 * @param {React.RefObject | null} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean | null} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {string | null} [props.name]
 * @param {EventAction | null} [props.onClear]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {string | null} [props.placeholder]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export default function ComboBoxTextInput({
  children,
  comboBoxListId,
  defaultValue,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  onClear,
  onSubmit,
  placeholder,
  ...rest
}) {
  // @ts-ignore
  const { onSubmit: onSubmitFormContext } = useFormContext();
  const [{ filterValue, isOptionsExpanded }, setComboBoxContext] = useComboBoxContext();
  const onEnterKeyPress = useOnKeyPress('Enter', useCallback(
    () => {
      setComboBoxContext((draftContext) => {
        if (draftContext.isOptionsExpanded) {
          // select currently highlighted menu item
          const selectedOption = draftContext.options.find((option) => option.value === draftContext.selectedOptionValue);
          draftContext.filterValue = selectedOption?.label ?? '';
          draftContext.isOptionsExpanded = false;
        } else {
          (onSubmit ?? onSubmitFormContext)();
        }
      });
    },
    [onSubmit, onSubmitFormContext, setComboBoxContext]
  ));

  const onCancelKeyPress = useOnKeyPress('Escape', useCallback(
    () => {
      setComboBoxContext((draftContext) => {
        // clear input
        draftContext.filterValue = '';
        draftContext.selectedOptionValue = '';
        draftContext.isOptionsExpanded = false;
      });
    },
    [setComboBoxContext]
  ));

  const onUpArrowPress = useOnKeyPress('ArrowUp', useCallback(
    () => {
      setComboBoxContext((draftContext) => {
        if (draftContext.isOptionsExpanded || !draftContext.selectedOptionValue) {
          // get index of currently selected item in the filtered items list
          const selectionIndex = draftContext.optionsFiltered.findIndex((option) => option.value === draftContext.selectedOptionValue);
          const currentSelectionIndex = (
            selectionIndex === -1
              ? draftContext.optionsFiltered.length - 1
              : (selectionIndex - 1 + draftContext.optionsFiltered.length)
          );
          const nextIndex = currentSelectionIndex % draftContext.optionsFiltered.length;
          draftContext.selectedOptionValue = draftContext.optionsFiltered[nextIndex].value;
        }

        // open options after pressing up
        draftContext.isOptionsExpanded = true;
      });
    },
    [setComboBoxContext]
  ));

  const onDownArrowPress = useOnKeyPress('ArrowDown', useCallback(
    () => {
      setComboBoxContext((draftContext) => {
        if (draftContext.isOptionsExpanded || !draftContext.selectedOptionValue) {
          // get index of currently selected item in the filtered items list
          const selectionIndex = draftContext.optionsFiltered.findIndex((option) => option.value === draftContext.selectedOptionValue);
          const currentSelectionIndex = (
            selectionIndex === -1
              ? 0
              : (selectionIndex + 1)
          );
          const nextIndex = currentSelectionIndex % draftContext.optionsFiltered.length;
          draftContext.selectedOptionValue = draftContext.optionsFiltered[nextIndex].value;
        }

        // open options after pressing up
        draftContext.isOptionsExpanded = true;
      });
    },
    [setComboBoxContext]
  ));

  return (
    <TextInput
      aria-autocomplete="list"
      aria-controls={comboBoxListId}
      aria-expanded={isOptionsExpanded}
      id={id}
      onChange={(e) => {
        setComboBoxContext((draftContext) => {
          draftContext.filterValue = e.target.value;
        });
      }}
      onClear={() => {
        setComboBoxContext((draftContext) => {
          draftContext.filterValue = '';
        });
      }}
      onKeyUp={(e) => {
        if (![
          onEnterKeyPress(e),
          onCancelKeyPress(e),
          onUpArrowPress(e),
          onDownArrowPress(e),
        ].some(identity)) {
          setComboBoxContext((draftContext) => {
            // if key wasn't one of the others, expand the options
            draftContext.isOptionsExpanded = true;
          });
        }
      }}
      onSubmit={onSubmit}
      placeholder={placeholder}
      value={filterValue}
      // @ts-ignore
      onFocus={() => {
        setComboBoxContext((draftContext) => {
          // if key wasn't one of the others, expand the options
          draftContext.isOptionsExpanded = true;
        });
      }}
      role="combobox"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
