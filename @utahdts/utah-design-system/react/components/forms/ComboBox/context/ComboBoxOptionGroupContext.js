import { createContext } from 'react';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxOptionGroupContextValue} ComboBoxOptionGroupContextValue */

export const ComboBoxOptionGroupContext = /** @type {typeof createContext<ComboBoxOptionGroupContextValue>} */ (createContext)('');
