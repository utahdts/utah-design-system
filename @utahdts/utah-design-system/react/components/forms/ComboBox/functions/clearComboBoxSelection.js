// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 */
export function clearComboBoxSelection(draftContext) {
  // clear input
  draftContext.filterValue = '';
  draftContext.isFilterValueDirty = false;
  draftContext.isOptionsExpanded = false;
  draftContext.optionValueHighlighted = '';
  draftContext.optionValueSelected = '';
}
