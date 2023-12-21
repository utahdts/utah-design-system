/* eslint-disable no-console */
// @ts-check
import React from 'react';

/** @typedef { import('../../../../jsDocTypes').MultiSelectContext} MultiSelectContext */

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
    selectedValues: [],
    textInputHasFocus: false,
  },
  () => {
    // comboBox will call this empty setter if there is no wrapping multi-select context
  },
  {
    current: {
      comboBoxDivElement: null,
      selectedOptionTagRefs: [],
      textInput: null,
    },
  },
]);
