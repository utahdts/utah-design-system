import { useContext } from 'react';
import { RadioButtonGroupContext } from './RadioButtonGroupContext';

/** @typedef { import('@utahdts/utah-design-system').RadioButtonGroupContext} RadioButtonGroupContextType */

/** @returns {RadioButtonGroupContextType} */
export function useRadioButtonGroupContext() {
  return useContext(RadioButtonGroupContext);
}
