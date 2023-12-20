import React from 'react';
import { ComboBoxOptionGroupContext } from './ComboBoxOptionGroupContext';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.optionGroupId
 * @returns {React.JSX.Element}
 */
export function ComboBoxOptionGroupContextProvider({ children, optionGroupId }) {
  return (
    <ComboBoxOptionGroupContext.Provider value={optionGroupId}>
      {children}
    </ComboBoxOptionGroupContext.Provider>
  );
}
