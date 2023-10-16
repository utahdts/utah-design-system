// @ts-check
import React from 'react';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.isLabelHidden]
 * @param {string | null} [props.label]
 * @returns {JSX.Element}
 */
export default function ComboBoxOptionGroup({
  children,
  label = null,
  isLabelHidden = false,
}) {
  return (
    <div role="list">
      {isLabelHidden ? null : <div className="combo-box-group__title">{label}</div>}
      {children}
    </div>
  );
}
