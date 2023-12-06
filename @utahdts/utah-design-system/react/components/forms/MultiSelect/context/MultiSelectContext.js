/* eslint-disable no-console */
// @ts-check
import React from 'react';

/** @typedef { import('../../../../jsDocTypes').MultiSelectContext} MultiSelectContext */

export const MultiSelectContext = /** @type {typeof React.createContext<MultiSelectContext>} */ (React.createContext)([
  {
    focusedValueTagIndex: NaN,
    hasTagTemplate: false,
    multiSelectId: 'default-context-value',
    selectedValues: [],
    onChange: () => { console.error('calling default MultiSelectContext onChange'); },
    onClear: () => { console.error('calling default MultiSelectContext onChange'); },
  },
  () => {
    console.error('calling default MultiSelectContext setter... you should probably setup a context provider before trying to use it.');
  },
  {
    current: {
      comboBoxDivElement: null,
    },
  },
]);
