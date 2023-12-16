import { useContext } from 'react';
import { FormContext } from './FormContext';

export function useFormContext() {
  return useContext(FormContext);
}
