// @ts-check
import React from 'react';

/** @typedef { import('../../../../jsDocTypes').ComboBoxContext} ComboBoxContext */

const ComboBoxContext = /** @type {typeof React.createContext<ComboBoxContext>} */ (React.createContext)([
  {
    filterValue: '',
    isFilterValueDirty: false,
    isOptionsExpanded: false,
    options: [],
    optionsFiltered: [],
    registerOption: () => { },
    optionValueHighlighted: null,
    optionValueSelected: null,
    unregisterOption: () => { },
  },
  () => {
    // eslint-disable-next-line no-console
    console.error('calling default ComboBoxContext setter... you should probably setup a context provider before trying to use it.');
  },
]);

export default ComboBoxContext;
