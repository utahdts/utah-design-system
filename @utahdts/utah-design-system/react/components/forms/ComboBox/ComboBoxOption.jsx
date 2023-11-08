// @ts-check
import React, { useEffect } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import Button from '../../buttons/Button';
import useComboBoxContext from './context/useComboBoxContext';

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
  const [
    {
      optionsFiltered,
      registerOption,
      optionValueHighlighted,
      optionValueSelected,
      textInputRef,
      unregisterOption,
    },
    setComboBoxContext,
  ] = useComboBoxContext();
  const isVisible = isStatic || optionsFiltered.find((optionNeedle) => optionNeedle.value === value);
  const isSelected = optionValueHighlighted === value;
  const isHighlighted = optionValueSelected === value;

  // let comboBox context know this option exists
  useEffect(
    () => {
      if (!isStatic) {
        registerOption({ value, label, labelLowerCase: label.toLocaleLowerCase() });
      }
      return () => {
        if (isStatic) {
          unregisterOption(value);
        }
      };
    },
    [registerOption, unregisterOption, value, label, isStatic]
  );

  return (
    isVisible
      ? (
        <li>
          <Button
            aria-selected={isSelected}
            className={joinClassNames(
              'combo-box-option',
              isSelected && 'combo-box-option--selected',
              isHighlighted && 'combo-box-option--highlighted'
            )}
            isDisabled={isDisabled}
            // TODO: this `style` attribute is bogus! remove it!
            // @ts-ignore
            style={isSelected ? { color: 'red' } : (isHighlighted ? { color: 'green' } : undefined)}
            onClick={() => setComboBoxContext((draftContext) => {
              draftContext.filterValue = label;
              draftContext.isFilterValueDirty = false;
              draftContext.isOptionsExpanded = false;
              draftContext.optionValueHighlighted = null;
              draftContext.optionValueSelected = value;
              const textInputValueLength = textInputRef?.current?.value.length ?? null;
              textInputRef?.current?.setSelectionRange(textInputValueLength, textInputValueLength);
            })}
            onMouseOver={() => setComboBoxContext((draftContext) => {
              draftContext.optionValueHighlighted = value;
            })}
            // https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
            onMouseDown={(e) => e.preventDefault()}
            // @ts-ignore
            role="option"
            tabIndex={isSelected ? 0 : -1}
          >
            {children ?? label}
          </Button>
        </li>
      )
      : null

  );
}
