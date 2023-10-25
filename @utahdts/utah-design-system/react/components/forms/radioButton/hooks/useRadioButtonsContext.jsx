import { useContext } from 'react';
import { RadioButtonsContext } from '../util/RadioButtonsContext';

export function useRadioButtonsContext() {
  return useContext(RadioButtonsContext);
}
