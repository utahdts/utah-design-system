import { useContext } from 'react';
import { FormContext } from './FormContext';

/**
 * @template FormContextT
 * @typedef {import('@utahdts/utah-design-system').FormContextValue<FormContextT>} FormContextValue
 */

/**
 * @template FormContextT
 * @returns {FormContextValue<FormContextT>}
 */
export function useFormContext() {
  // @ts-ignore
  return useContext(FormContext);
}
