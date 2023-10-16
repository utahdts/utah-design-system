// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 */
export function moveComboBoxSelectionDown(draftContext) {
  // get index of currently selected item in the filtered items list
  const selectionIndex = draftContext.optionsFiltered.findIndex((option) => option.value === draftContext.selectedOptionValue);
  console.log('🚀 ~ file: moveComboBoxSelectionDown.js:11 ~ moveComboBoxSelectionDown ~ draftContext.selectedOptionValue:', draftContext.selectedOptionValue);
  console.log('🚀 ~ file: moveComboBoxSelectionDown.js:11 ~ moveComboBoxSelectionDown ~ selectionIndex:', selectionIndex);
  const currentSelectionIndex = (
    selectionIndex === -1
      ? 0
      : (selectionIndex + 1)
  );
  const nextIndex = currentSelectionIndex % draftContext.optionsFiltered.length;
  draftContext.selectedOptionValue = draftContext.optionsFiltered[nextIndex]?.value ?? null;

  // open options after pressing down
  draftContext.isOptionsExpanded = true;
  console.log('🚀 ~ file: moveComboBoxSelectionDown.js:23 ~ moveComboBoxSelectionDown ~ draftContext:', JSON.parse(JSON.stringify(draftContext)));
}
