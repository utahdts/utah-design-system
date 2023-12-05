// @ts-check
import { useContext } from 'react';
import { ComboBoxContext } from './ComboBoxContext';

/** @typedef { import('../../../../jsDocTypes').ComboBoxContext} ComboBoxContextType */

/** @return {ComboBoxContextType} */
export function useComboBoxContext() {
  return useContext(ComboBoxContext);
}
