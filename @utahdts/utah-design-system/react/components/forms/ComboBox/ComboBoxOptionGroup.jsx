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
    <li className="combo-box-input__group-wrapper" role="group">
      {isLabelHidden ? null : <div className="combo-box-input__group-title">{label}</div>}
      <ul>
        {children}
      </ul>
    </li>
  );
}
