import {
  useCallback,
  useEffect,
  useId,
  useRef,
} from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { useOnKeyUp } from '../../../util/useOnKeyUp';
import { useMultiSelectContext } from '../MultiSelect/context/useMultiSelectContext';
import { useComboBoxContext } from './context/useComboBoxContext';
import { useComboBoxOptionGroupContext } from './context/useComboBoxOptionGroupContext';
import { isOptionGroupVisible } from './functions/isOptionGroupVisible';
import { moveComboBoxSelectionDown } from './functions/moveComboBoxSelectionDown';
import { moveComboBoxSelectionUp } from './functions/moveComboBoxSelectionUp';
import { selectComboBoxSelection } from './functions/selectComboBoxSelection';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.identifiesWithOptionGroupId] some things like group labels are focusable in the list, but not filterable, this is their `id`
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isHidden] multi-select does not show options that are selected
 * @param {boolean} [props.isStatic] static options are always visible and not filterable
 * @param {string} props.label
 * @param {string} props.value
 * @returns {import('react').JSX.Element | null}
 */
export function ComboBoxOption({
  children,
  className,
  isDisabled,
  identifiesWithOptionGroupId,
  isStatic,
  isHidden,
  label,
  value,
  ...rest
}) {
  const optionId = useId();
  const optionRef = useRef(/** @type {HTMLLIElement | null} */(null));
  const [multiSelectContext] = useMultiSelectContext();
  const [
    {
      isOptionsExpanded,
      onChange,
      optionsFiltered,
      optionsFilteredWithoutGroupLabels,
      optionValueFocused,
      optionValueHighlighted,
      optionValueSelected,
      registerOption,
      unregisterOption,
    },
    setComboBoxContext,
    comboBoxContextNonStateRef,
  ] = useComboBoxContext();
  const optionGroupId = useComboBoxOptionGroupContext();
  const isVisible = (
    !isHidden
    && isOptionGroupVisible(identifiesWithOptionGroupId ?? null, label, optionsFiltered, multiSelectContext.selectedValues)
    && (isStatic || optionsFiltered.find((optionNeedle) => optionNeedle.value === value))
  );
  const isSelected = optionValueSelected !== '' && optionValueSelected !== null && (optionValueSelected === value);
  const isHighlighted = optionValueHighlighted !== '' && optionValueHighlighted !== null && (optionValueHighlighted === value);

  const onEnterKeyPress = useOnKeyUp(
    'Enter',
    useCallback(
      () => {
        if (!isDisabled) {
          onChange(value);
          setComboBoxContext((draftContext) => selectComboBoxSelection(draftContext, comboBoxContextNonStateRef.current.textInput));
        }
      },
      [isDisabled, onChange, value, setComboBoxContext, comboBoxContextNonStateRef]
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
        comboBoxContextNonStateRef.current.textInput?.focus();
      }),
      [setComboBoxContext, comboBoxContextNonStateRef]
    )
  );
  const onUpArrowPress = useOnKeyUp(
    'ArrowUp',
    useCallback(
      () => setComboBoxContext(
        (draftContext) => moveComboBoxSelectionUp(draftContext, comboBoxContextNonStateRef.current.textInput, multiSelectContext)
      ),
      [comboBoxContextNonStateRef, multiSelectContext, setComboBoxContext]
    ),
    true
  );
  const onDownArrowPress = useOnKeyUp(
    'ArrowDown',
    useCallback(
      () => setComboBoxContext((draftContext) => moveComboBoxSelectionDown(draftContext, multiSelectContext)),
      [multiSelectContext, setComboBoxContext]
    ),
    true
  );

  // let comboBox context know this option exists
  useEffect(
    () => {
      if (!isStatic) {
        // register also updates if it already exists
        registerOption({
          isHidden,
          isGroupLabel: !!identifiesWithOptionGroupId,
          label,
          labelLowerCase: label.toLocaleLowerCase(),
          optionGroupId,
          value,
        });
      }
      // unregister is handled on unmount instead of on data change
    },
    [registerOption, unregisterOption, value, label, identifiesWithOptionGroupId, isHidden, isStatic, comboBoxContextNonStateRef]
  );

  useEffect(
    // unregister only when unmounting
    () => (
      () => {
        if (!isStatic) {
          unregisterOption(value);
        }
      }
    ),
    []
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

  // scroll in to view
  useEffect(
    () => {
      if (isOptionsExpanded && isSelected) {
        optionRef.current?.scrollIntoView({ block: 'nearest' });
      }
    },
    [isOptionsExpanded, isSelected]
  );

  return (
    isVisible
      ? (
        <li
          aria-disabled={isDisabled}
          aria-selected={optionValueSelected === value}
          aria-setsize={optionsFilteredWithoutGroupLabels.length}
          id={optionId}
          className={joinClassNames(
            className,
            'combo-box-input__option',
            isDisabled && 'combo-box-input__option--disabled',
            isSelected && 'combo-box-input__option--selected',
            isHighlighted && 'combo-box-input__option--highlighted',
            optionGroupId && 'combo-box-input__option--in-group'
          )}
          onClick={() => {
            if (!isDisabled) {
              onChange(value);
              setComboBoxContext((draftContext) => {
                draftContext.isFilterValueDirty = false;
                draftContext.isOptionsExpanded = false;
                draftContext.optionValueHighlighted = null;
                setTimeout(
                  () => {
                    // move cursor to end after clicking an option, so it can be edited
                    // take the update of the selection out of the loop so the state updates before it moves the cursor
                    comboBoxContextNonStateRef.current.textInput?.setSelectionRange(label.length, label.length);
                  },
                  0
                );
              });
            }
          }}
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
            onEnterKeyPress(e);
            onCancelKeyPress(e);
            onUpArrowPress(e);
            onDownArrowPress(e);
          }}
          // https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
          onMouseDown={(e) => e.preventDefault()}
          ref={optionRef}
          role="option"
          tabIndex={(isSelected && isOptionsExpanded) ? 0 : -1}
          {...rest}
        >
          {children ?? label}
        </li>
      )
      : null
  );
}
