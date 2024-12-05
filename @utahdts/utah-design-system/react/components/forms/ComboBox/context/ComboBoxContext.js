import { createContext } from 'react';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxContext} ComboBoxContext */

export const ComboBoxContext = /** @type {typeof createContext<ComboBoxContext>} */ (createContext)([
  {
    filterValue: '',
    optionValueFocused: null,
    isFilterValueDirty: false,
    isOptionsExpanded: false,
    isValueClearedOnSelection: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => { },
    options: [],
    optionsFiltered: [],
    optionsFilteredWithoutGroupLabels: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerOption: () => { },
    optionValueFocusedId: null,
    optionValueHighlighted: null,
    optionValueSelected: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
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
