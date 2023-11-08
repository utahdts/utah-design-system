// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 */
export function moveComboBoxSelectionDown(draftContext) {
  if (!draftContext.isFilterValueDirty || draftContext.isOptionsExpanded) {
    // get index of currently selected item in the filtered items list
    const selectionIndex = draftContext.optionsFiltered.findIndex(
      (option) => option.value === draftContext.optionValueHighlighted ?? draftContext.optionValueSelected
    );
    const currentSelectionIndex = (
      selectionIndex === -1
        ? 0
        : (selectionIndex + 1)
    );
    const nextIndex = currentSelectionIndex % draftContext.optionsFiltered.length;
    draftContext.optionValueHighlighted = draftContext.optionsFiltered[nextIndex]?.value ?? null;

    // open options after pressing down
    draftContext.isOptionsExpanded = true;
  }
}
