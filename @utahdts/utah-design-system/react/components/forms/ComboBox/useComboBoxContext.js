// @ts-check
import { useContext } from 'react';
import ComboBoxContext from './ComboBoxContext';

/** @typedef { import('../../../jsDocTypes').ComboBoxContext} ComboBoxContextType */

// This hook provides the context's data; most everything should just use this hook and nothing else
/**
 * @return {ComboBoxContextType}
 */
export default function useComboBoxContext() {
  return useContext(ComboBoxContext);
}
