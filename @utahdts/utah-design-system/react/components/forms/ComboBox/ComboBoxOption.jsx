// @ts-check
import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
} from 'react';
import joinClassNames from '../../../util/joinClassNames';
import useOnKeyUp from '../../../util/useOnKeyUp';
import useComboBoxContext from './context/useComboBoxContext';
import { moveComboBoxSelectionDown } from './functions/moveComboBoxSelectionDown';
import { moveComboBoxSelectionUp } from './functions/moveComboBoxSelectionUp';
import { selectComboBoxSelection } from './functions/selectComboBoxSelection';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isStatic] static options are always visible and not filterable
 * @param {string} props.label
 * @param {string} props.value
 * @returns {JSX.Element | null}
 */
export default function ComboBoxOption({
  children = null,
  isDisabled,
  isStatic,
  label,
  value,
}) {
  const optionId = useId();
  const optionRef = useRef(/** @type {HTMLLIElement | null} */(null));
  const [
    {
      onChange,
      optionsFiltered,
      optionValueFocused,
      optionValueHighlighted,
      optionValueSelected,
      registerOption,
      unregisterOption,
    },
    setComboBoxContext,
    textInputRef,
  ] = useComboBoxContext();
  const isVisible = isStatic || optionsFiltered.find((optionNeedle) => optionNeedle.value === value);
  const isSelected = optionValueHighlighted === value;
  const isHighlighted = optionValueSelected === value;

  const onEnterKeyPress = useOnKeyUp(
    'Enter',
    useCallback(
      () => {
        if (!isDisabled) {
          onChange(value);
          setComboBoxContext((draftContext) => selectComboBoxSelection(draftContext, textInputRef, undefined));
        }
      },
      [isDisabled, onChange, value, setComboBoxContext, textInputRef]
    ),
    true
  );
  const onCancelKeyPress = useOnKeyUp(
    'Escape',
    useCallback(
      () => setComboBoxContext((draftCombBoxContext) => {
        draftCombBoxContext.isOptionsExpanded = false;
        draftCombBoxContext.optionValueFocused = null;
        draftCombBoxContext.optionValueFocusedId = null;
        textInputRef.current?.focus();
      }),
      [setComboBoxContext, textInputRef]
    )
  );
  const onUpArrowPress = useOnKeyUp('ArrowUp', useCallback(() => setComboBoxContext((draftContext) => moveComboBoxSelectionUp(draftContext, textInputRef)), [setComboBoxContext, textInputRef]), true);
  const onDownArrowPress = useOnKeyUp('ArrowDown', useCallback(() => setComboBoxContext(moveComboBoxSelectionDown), [setComboBoxContext]), true);

  // let comboBox context know this option exists
  useEffect(
    () => {
      if (!isStatic) {
        registerOption({ value, label, labelLowerCase: label.toLocaleLowerCase() });
      }
      return () => {
        if (!isStatic) {
          unregisterOption(value);
        }
      };
    },
    [registerOption, unregisterOption, value, label, isStatic]
  );

  // handle focusing
  useEffect(
    () => {
      if (optionValueFocused === value) {
        if (optionRef.current !== document.activeElement) {
          // this is the currently focused value! focus it!
          optionRef.current?.focus();
        }
      } else if (optionRef.current === document.activeElement) {
        // not the current item, but is focused, so blur it
        optionRef.current?.blur();
      }
    },
    [optionValueFocused, value]
  );

  return (
    isVisible
      ? (
        <li
          aria-disabled={isDisabled}
          aria-selected={optionValueSelected === value}
          aria-setsize={optionsFiltered.length}
          id={optionId}
          className={joinClassNames(
            'combo-box-option',
            isDisabled && 'combo-box-option--disabled',
            isSelected && 'combo-box-option--selected',
            isHighlighted && 'combo-box-option--highlighted'
          )}
          onClick={() => {
            if (!isDisabled) {
              onChange(value);
              setComboBoxContext((draftContext) => {
                draftContext.filterValue = label;
                draftContext.isFilterValueDirty = false;
                draftContext.isOptionsExpanded = false;
                draftContext.optionValueHighlighted = null;
                draftContext.optionValueSelected = value;
                setTimeout(
                  () => {
                    // move cursor to end after clicking an option so it can be edited
                    // take the update of the selection out of the loop so the state updates before it moves the cursor
                    textInputRef.current?.setSelectionRange(label.length, label.length);
                  },
                  0
                );
              });
            }
          }}
          // @ts-ignore
          onBlur={() => setComboBoxContext((draftContext) => {
            if (draftContext.optionValueFocused === value) {
              draftContext.optionValueFocused = null;
              draftContext.optionValueFocusedId = null;
              draftContext.isOptionsExpanded = false;
            }
          })}
          onFocus={() => setComboBoxContext((draftContext) => {
            draftContext.optionValueFocused = value;
            draftContext.optionValueFocusedId = optionId;
            draftContext.optionValueHighlighted = value;
          })}
          onKeyDown={
            (e) => {
              // prevent browser scrolling when arrowing through options
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }
          }
          onKeyUp={(e) => {
            // @ts-ignore
            onEnterKeyPress(e);
            // @ts-ignore
            onCancelKeyPress(e);
            // @ts-ignore
            onUpArrowPress(e);
            // @ts-ignore
            onDownArrowPress(e);
          }}
          // https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
          onMouseDown={(e) => e.preventDefault()}
          ref={optionRef}
          role="option"
          tabIndex={isSelected ? 0 : -1}
        >
          {children ?? label}
        </li>
      )
      : null
  );
}
