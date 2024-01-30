/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */
/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */
/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */

/**
 * Ick, so many parameters...
 * @param {MultiSelectContextValue} draftContext the context for updating state
 * @param {(message: string) => void} addPoliteMessage accessibility announcer
 * @param {number} selectedValueIndex the index of the tag being deleted
 * @param {ComboBoxOptionType} selectedOption the option being removed
 * @param {import('react').MutableRefObject<MultiSelectContextNonStateRef> | null} multiSelectContextNonStateRef
 * @param {(newValues: string[]) => void} onChange
 */
export function removeSelectedOption(draftContext, addPoliteMessage, selectedValueIndex, selectedOption, multiSelectContextNonStateRef, onChange) {
  // remove from selected values
  draftContext.selectedValues.splice(selectedValueIndex, 1);

  onChange(JSON.parse(JSON.stringify(draftContext.selectedValues)));

  addPoliteMessage(`Removed ${selectedOption?.label}`);

  // move focus to next item (selectedValues[] is shorter now)
  if (selectedValueIndex >= draftContext.selectedValues.length) {
    // focus on the text input if there is not a next item
    draftContext.focusedValueTagIndex = NaN;
    // @ts-ignore
    multiSelectContextNonStateRef?.current.comboBoxDivElement?.querySelector('.combo-box-input')?.focus();
  }
}
