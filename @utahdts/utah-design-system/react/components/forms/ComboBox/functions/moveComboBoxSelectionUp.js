// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 */
export function moveComboBoxSelectionUp(draftContext) {
  if (draftContext.isOptionsExpanded || !draftContext.selectedOptionValue) {
    // get index of currently selected item in the filtered items list
    const selectionIndex = draftContext.optionsFiltered.findIndex((option) => option.value === draftContext.selectedOptionValue);
    const currentSelectionIndex = (
      selectionIndex === -1
        ? draftContext.optionsFiltered.length - 1
        : (selectionIndex - 1 + draftContext.optionsFiltered.length)
    );
    const nextIndex = currentSelectionIndex % draftContext.optionsFiltered.length;
    draftContext.selectedOptionValue = draftContext.optionsFiltered[nextIndex]?.value ?? null;
  }

  // open options after pressing up
  draftContext.isOptionsExpanded = true;
}
