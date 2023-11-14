// @ts-check
import { useContext } from 'react';
import ComboBoxContext from './ComboBoxContext';

/** @typedef { import('../../../../jsDocTypes').ComboBoxContext} ComboBoxContextType */

/**
 * @return {ComboBoxContextType}
 */
export default function useComboBoxContext() {
  return useContext(ComboBoxContext);
}