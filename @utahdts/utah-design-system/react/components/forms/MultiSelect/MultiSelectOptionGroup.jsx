// @ts-check
import React from 'react';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.isLabelHidden]
 * @param {string | null} [props.label]
 * @returns {JSX.Element}
 */
export function MultiSelectOptionGroup({
  children,
  label = null,
  isLabelHidden = false,
}) {
  return (
    <div className="multi-select-group__wrapper">
      {isLabelHidden ? null : <div className="multi-select-group__title">{label}</div>}
      {children}
    </div>
  );
}
