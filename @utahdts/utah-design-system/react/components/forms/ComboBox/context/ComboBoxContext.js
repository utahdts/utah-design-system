// @ts-check
import React from 'react';

/** @typedef { import('../../../../jsDocTypes').ComboBoxContext} ComboBoxContext */

export const ComboBoxContext = /** @type {typeof React.createContext<ComboBoxContext>} */ (React.createContext)([
  {
    filterValue: '',
    optionValueFocused: null,
    isFilterValueDirty: false,
    isOptionsExpanded: false,
    isValueClearedOnSelection: false,
    onChange: () => { },
    options: [],
    optionsFiltered: [],
    optionsFilteredWithoutGroupLabels: [],
    registerOption: () => { },
    optionValueFocusedId: null,
    optionValueHighlighted: null,
    optionValueSelected: null,
    unregisterOption: () => { },
  },
  () => {
    // eslint-disable-next-line no-console
    console.error('calling default ComboBoxContext setter... you should probably setup a context provider before trying to use it.');
  },
  {
    current: {
      textInput: null,
    },
  },
]);
