import { useContext } from 'react';
import { ComboBoxOptionGroupContext } from './ComboBoxOptionGroupContext';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxOptionGroupContextValue} ComboBoxOptionGroupContextValue */

/** @returns {ComboBoxOptionGroupContextValue} */
export function useComboBoxOptionGroupContext() {
  return useContext(ComboBoxOptionGroupContext);
}
