// @ts-check
import React from 'react';

/** @typedef { import('../../../jsDocTypes').ComboBoxContext} ComboBoxContext */

const ComboBoxContext = /** @type {typeof React.createContext<ComboBoxContext>} */ (React.createContext)([
  {
    filterValue: '',
    isOptionsExpanded: false,
    options: [],
    optionsFiltered: [],
    registerOption: () => { },
    selectedOptionValue: null,
    unregisterOption: () => { },
  },
  () => { },
]);

export default ComboBoxContext;
