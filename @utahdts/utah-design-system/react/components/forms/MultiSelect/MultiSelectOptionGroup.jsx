// @ts-check
import React from 'react';
import { ComboBoxOptionGroup } from '../ComboBox/ComboBoxOptionGroup';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.label
 * @returns {JSX.Element}
 */
export function MultiSelectOptionGroup({
  children,
  label,
}) {
  return (
    <ComboBoxOptionGroup
      className="multi-select-option-group"
      label={label}
    >
      {children}
    </ComboBoxOptionGroup>
  );
}
