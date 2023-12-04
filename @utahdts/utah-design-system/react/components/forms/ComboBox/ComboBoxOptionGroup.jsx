// @ts-check
import React from 'react';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.label
 * @returns {JSX.Element}
 */
export default function ComboBoxOptionGroup({
  children,
  label,
}) {
  return (
    <li className="combo-box-input__group-wrapper" role="group">
      <div className="combo-box-input__group-title">{label}</div>
      <ul>
        {children}
      </ul>
    </li>
  );
}
