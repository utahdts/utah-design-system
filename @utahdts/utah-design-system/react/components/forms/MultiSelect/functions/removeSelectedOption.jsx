// @ts-check
/** @typedef {import('../../../../jsDocTypes').ComboBoxOption} ComboBoxOption */
/** @typedef {import('../../../../jsDocTypes').MultiSelectContextValue} MultiSelectContextValue */
/** @typedef {import('../../../../jsDocTypes').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */

/**
 * @param {MultiSelectContextValue} draftContext the context for updating state
 * @param {(message: string) => void} addPoliteMessage accessibility announcer
 * @param {number} selectedValueIndex the index of the tag being deleted
 * @param {ComboBoxOption} selectedOption the option being removed
 * @param {React.MutableRefObject<MultiSelectContextNonStateRef>} multiSelectContextNonStateRef
 */
export function removeSelectedOption(draftContext, addPoliteMessage, selectedValueIndex, selectedOption, multiSelectContextNonStateRef) {
  // remove from selected values
  draftContext.selectedValues.splice(selectedValueIndex, 1);

  addPoliteMessage(`Removed ${selectedOption?.label}`);

  // move focus to next item (selectedValues[] is shorter now)
  if (selectedValueIndex >= draftContext.selectedValues.length) {
    // focus on the text input if there is not a next item
    draftContext.focusedValueTagIndex = NaN;
    // @ts-ignore
    multiSelectContextNonStateRef.current.comboBoxDivElement?.querySelector('.combo-box-input')?.focus();
  }
}
