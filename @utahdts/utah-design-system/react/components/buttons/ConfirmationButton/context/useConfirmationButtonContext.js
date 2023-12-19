import { useContext } from 'react';
import { ConfirmationButtonContext } from './ConfirmationButtonContext';

/** @returns {boolean} */
export function useConfirmationButtonContext() {
  return useContext(ConfirmationButtonContext);
}
