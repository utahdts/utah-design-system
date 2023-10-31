import { createContext } from 'react';

/** @typedef {import('../../../jsDocTypes').RadioButtonsContextValue<any>} RadioButtonsContextValue */

export const RadioButtonsContext = /** @type {typeof createContext<RadioButtonsContextValue>} */ (createContext)({
  currentOnChange: null,
  currentValue: null,
  currentOnFormKeyPress: null,
});
