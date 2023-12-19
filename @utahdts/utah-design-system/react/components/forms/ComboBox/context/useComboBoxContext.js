import { useContext } from 'react';
import { ComboBoxContext } from './ComboBoxContext';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxContext} ComboBoxContextType */

/** @returns {ComboBoxContextType} */
export function useComboBoxContext() {
  return useContext(ComboBoxContext);
}
