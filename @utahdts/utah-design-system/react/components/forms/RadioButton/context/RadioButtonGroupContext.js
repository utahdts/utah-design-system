import React from 'react';

/** @typedef { import('@utahdts/utah-design-system').RadioButtonGroupContext} RadioButtonGroupContext */

export const RadioButtonGroupContext = /** @type {typeof React.createContext<RadioButtonGroupContext>} */ (React.createContext)([
  undefined,
  () => {
    // eslint-disable-next-line no-console
    console.error('calling default RadioButtonGroupContext setter... you should probably setup a context provider before trying to use it.');
  },
]);
