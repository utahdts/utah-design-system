// @ts-check
import { useContext } from 'react';
import { ComboBoxOptionGroupContext } from './ComboBoxOptionGroupContext';

/** @typedef { import('../../../../jsDocTypes').ComboBoxOptionGroupContextValue} ComboBoxOptionGroupContextValue */

/** @return {ComboBoxOptionGroupContextValue} */
export function useComboBoxOptionGroupContext() {
  return useContext(ComboBoxOptionGroupContext);
}
