// @ts-check
import { useContext } from 'react';
import RadioButtonGroupContext from './RadioButtonGroupContext';

/** @typedef { import('../../../../jsDocTypes').RadioButtonGroupContext} RadioButtonGroupContextType */

/**
 * @return {RadioButtonGroupContextType}
 */
export default function useRadioButtonGroupContext() {
  return useContext(RadioButtonGroupContext);
}
