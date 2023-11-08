// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {(() => void) | undefined} onSubmit
 */
export function selectComboBoxSelection(draftContext, onSubmit) {
  if (draftContext.isOptionsExpanded) {
    // select currently highlighted menu item
    draftContext.filterValue = draftContext.optionValueHighlighted ?? '';
    draftContext.isFilterValueDirty = false;
    draftContext.isOptionsExpanded = false;
    draftContext.optionValueSelected = draftContext.optionValueHighlighted;
  } else {
    onSubmit?.();
  }
}
