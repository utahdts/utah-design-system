import { useContext } from 'react';
import FormContext from './FormContext';

export default function useFormContext() {
  return useContext(FormContext);
}
