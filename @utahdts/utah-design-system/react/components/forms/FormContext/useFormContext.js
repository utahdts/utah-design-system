import { useContext } from 'react';
import FormContext from './FormContext';

/**
 * @template FormContextT
 * @typedef {import('../../../jsDocTypes').FormContextValue<FormContextT>} FormContextValue
 */

/**
 * @template FormContextT
 * @returns {FormContextValue<FormContextT>}
 */
export default function useFormContext() {
  return useContext(FormContext);
}
