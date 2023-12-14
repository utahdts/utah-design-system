import React from 'react';
import { ComboBoxOptionGroupContext } from './ComboBoxOptionGroupContext';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.optionGroupId
 * @returns {JSX.Element}
 */
export function ComboBoxOptionGroupContextProvider({ children, optionGroupId }) {
  return (
    <ComboBoxOptionGroupContext.Provider value={optionGroupId}>
      {children}
    </ComboBoxOptionGroupContext.Provider>
  );
}
