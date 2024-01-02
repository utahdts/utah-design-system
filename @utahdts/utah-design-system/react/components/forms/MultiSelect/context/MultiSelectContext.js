/* eslint-disable no-console */
import React from 'react';

/** @typedef { import('@utahdts/utah-design-system').MultiSelectContext} MultiSelectContext */

export const MultiSelectContext = /** @type {typeof React.createContext<MultiSelectContext>} */ (React.createContext)([
  {
    clearButtonHasFocus: false,
    comboBoxOptions: [],
    focusedValueTagIndex: NaN,
    isOptionsExpanded: false,
    tagTemplate: null,
    multiSelectId: 'default-context-value',
    onChange: () => { console.error('calling default MultiSelectContext onChange'); },
    onClear: () => { console.error('calling default MultiSelectContext onChange'); },
    optionTagClassNames: {},
    selectedValues: [],
    textInputHasFocus: false,
  },
  () => {
    // comboBox will call this empty setter if there is no wrapping multi-select context
  },
  // the global context does not track refs; had a bug where combo boxes were using global multi-select context refs
  null,
]);
