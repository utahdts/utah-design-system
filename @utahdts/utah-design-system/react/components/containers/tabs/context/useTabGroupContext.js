import { useContext } from 'react';
import { TabGroupContext } from './TabGroupContext';

/** @typedef { import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextType */

/** @returns {TabGroupContextType} */
export function useTabGroupContext() {
  return useContext(TabGroupContext);
}
