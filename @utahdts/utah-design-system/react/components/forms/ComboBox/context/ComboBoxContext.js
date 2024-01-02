import { createContext } from 'react';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxContext} ComboBoxContext */

export const ComboBoxContext = /** @type {typeof createContext<ComboBoxContext>} */ (createContext)([
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
