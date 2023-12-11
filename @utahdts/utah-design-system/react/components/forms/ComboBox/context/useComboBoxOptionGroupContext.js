// @ts-check
import { useContext } from 'react';
import { ComboBoxOptionGroupContext } from './ComboBoxOptionGroupContext';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxOptionGroupContextValue} ComboBoxOptionGroupContextValue */

/** @return {ComboBoxOptionGroupContextValue} */
export function useComboBoxOptionGroupContext() {
  return useContext(ComboBoxOptionGroupContext);
}
