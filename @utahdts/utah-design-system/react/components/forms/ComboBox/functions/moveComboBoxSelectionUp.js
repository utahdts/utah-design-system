// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 */
export function moveComboBoxSelectionUp(draftContext) {
  if (draftContext.isOptionsExpanded) {
    // get index of currently selected item in the filtered items list
    const selectionIndex = draftContext.optionsFiltered.findIndex(
      (option) => option.value === draftContext.optionValueHighlighted ?? draftContext.optionValueSelected
    );
    const currentSelectionIndex = (
      selectionIndex === -1
        ? draftContext.optionsFiltered.length - 1
        : (selectionIndex - 1)
    );
    if (currentSelectionIndex >= 0) {
      draftContext.optionValueHighlighted = draftContext.optionsFiltered[currentSelectionIndex]?.value ?? null;
    } else {
      // if at top, then close the options list
      draftContext.isOptionsExpanded = false;
      draftContext.optionValueHighlighted = null;
    }
  }
}
