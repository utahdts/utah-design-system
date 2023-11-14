// @ts-check
import React from 'react';

/** @typedef { import('../../../../jsDocTypes').RadioButtonGroupContext} RadioButtonGroupContext */

const RadioButtonGroupContext = /** @type {typeof React.createContext<RadioButtonGroupContext>} */ (React.createContext)([
  undefined,
  () => {
    // eslint-disable-next-line no-console
    console.error('calling default RadioButtonGroupContext setter... you should probably setup a context provider before trying to use it.');
  },
]);

export default RadioButtonGroupContext;