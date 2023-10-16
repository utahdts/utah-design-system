// @ts-check
import React, { useEffect } from 'react';
import Button from '../../buttons/Button';
import useComboBoxContext from './context/useComboBoxContext';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} props.value
 * @returns {JSX.Element | null}
 */
export default function ComboBoxOption({
  children = null,
  label,
  value,
}) {
  const [
    {
      optionsFiltered,
      registerOption,
      selectedOptionValue,
      unregisterOption,
    },
    setComboBoxContext,
  ] = useComboBoxContext();
  const isVisible = optionsFiltered.find((option) => option.value === value);
  const isSelected = selectedOptionValue === value;

  // let comboBox context know this option exists
  useEffect(
    () => {
      registerOption({ value, label, labelLowerCase: label.toLocaleLowerCase() });
      return () => unregisterOption(value);
    },
    [registerOption, unregisterOption, value, label]
  );

  return (
    isVisible
      ? (
        <div role="listitem">
          <Button
            aria-selected={isSelected}
            className={isSelected ? 'combo-box-option--selected' : undefined}
            // TODO: this `style` attribute is bogus! remove it!
            // @ts-ignore
            style={isSelected ? { color: 'red' } : undefined}
            onClick={() => setComboBoxContext((draftContext) => {
              draftContext.filterValue = label;
              draftContext.selectedOptionValue = value;
              draftContext.isOptionsExpanded = false;
            })}
            // @ts-ignore
            role="option"
          >
            {children ?? label}
          </Button>
        </div>
      )
      : null

  );
}
