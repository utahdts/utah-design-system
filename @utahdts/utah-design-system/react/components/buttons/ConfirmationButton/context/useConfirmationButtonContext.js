import { useContext } from 'react';
import { ConfirmationButtonContext } from './ConfirmationButtonContext';

export function useConfirmationButtonContext() {
  return useContext(ConfirmationButtonContext);
}
