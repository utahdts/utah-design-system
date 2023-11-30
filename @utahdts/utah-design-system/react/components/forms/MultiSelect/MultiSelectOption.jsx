// @ts-check
import React from 'react';
import ComboBoxOption from '../ComboBox/ComboBoxOption';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isStatic] static options are always visible and not filterable
 * @param {string} props.label
 * @param {string} props.value
 * @returns {JSX.Element | null}
 */
export function MultiSelectOption({
  children = null,
  isDisabled,
  isStatic,
  label,
  value,
}) {
  return (
    <ComboBoxOption
      isDisabled={isDisabled}
      isStatic={isStatic}
      label={label}
      value={value}
    >
      {children}
    </ComboBoxOption>
  );
}
