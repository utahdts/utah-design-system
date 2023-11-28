// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {import('react').MutableRefObject<HTMLInputElement | null>} textInputRef
 */
export function moveComboBoxSelectionUp(draftContext, textInputRef) {
  if (draftContext.isOptionsExpanded) {
    // get index of currently selected item in the filtered items list
    const selectionIndex = draftContext.optionsFiltered.findIndex(
      (option) => (option.value === draftContext.optionValueHighlighted) ?? draftContext.optionValueSelected
    );
    const currentSelectionIndex = (
      selectionIndex === -1
        ? draftContext.optionsFiltered.length - 1
        : (selectionIndex - 1)
    );
    if (currentSelectionIndex >= 0) {
      const newHighlightedValue = draftContext.optionsFiltered[currentSelectionIndex]?.value ?? null;
      draftContext.optionValueHighlighted = newHighlightedValue;
      draftContext.optionValueFocused = newHighlightedValue;
      document.querySelector(`[value="${newHighlightedValue}"]`)?.[0]?.focus();
    } else {
      // if at top, then close the options list
      draftContext.isOptionsExpanded = false;
      draftContext.optionValueHighlighted = null;
      draftContext.optionValueFocused = null;
      textInputRef.current?.focus();
    }
  }
}
