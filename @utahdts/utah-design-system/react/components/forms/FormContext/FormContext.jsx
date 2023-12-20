import { createContext } from 'react';

/**
 * @template FormContextT
 * @typedef {import('@utahdts/utah-design-system').FormContextValue<FormContextT>} FormContextValue
 */

/** @template FormContextT */
export const FormContext = /** @type {typeof createContext<FormContextValue<FormContextT>>} */(createContext)({
  onChange: () => { },
  onSubmit: () => { },
  setState: () => { },
  state: /** @type {any} */ ({}),
});
