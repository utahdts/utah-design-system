/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {HTMLInputElement | null} textInput
 * @param {(() => void) | undefined} onSubmit
 */
export function selectComboBoxSelection(draftContext, textInput, onSubmit) {
  draftContext.optionValueFocused = null;

  if (draftContext.isValueClearedOnSelection) {
    // for multi-select, after option is selected, clear the combox box input filter field
    // for combo-box, this shouldn't happen, since the filter shown is the currently selected value and shouldn't be cleared
    draftContext.filterValue = '';
  }

  if (draftContext.isOptionsExpanded) {
    const selectedOption = draftContext.options.find(
      (option) => option.value === (draftContext.optionValueHighlighted ?? draftContext.optionValueSelected)
    );

    // select currently highlighted menu item
    draftContext.isFilterValueDirty = false;
    draftContext.isOptionsExpanded = false;

    if (selectedOption) {
      const selectedOptionLabel = selectedOption.label;
      setTimeout(
        () => {
          // move cursor to end after clicking an option so it can be edited
          // take the update of the selection out of the loop so the state updates before it moves the cursor
          textInput?.setSelectionRange(selectedOptionLabel.length, selectedOptionLabel.length);
          textInput?.focus();
        },
        // without waiting, when picking hte last item for a multi-select, it would focus on the text input and then focus on the new tag!
        // but it should just stay on the text input so delay to make sure text input focusing is last
        10
      );
    }
  } else {
    textInput?.focus();
    onSubmit?.();
  }
}
