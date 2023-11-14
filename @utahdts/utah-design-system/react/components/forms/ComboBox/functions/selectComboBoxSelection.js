// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {import('react').MutableRefObject<HTMLInputElement | null>} textInputRef
 * @param {(() => void) | undefined} onSubmit
 */
export function selectComboBoxSelection(draftContext, textInputRef, onSubmit) {
  draftContext.optionValueFocused = null;

  if (draftContext.isOptionsExpanded) {
    const selectedOption = draftContext.options.find(
      (option) => option.value === (draftContext.optionValueHighlighted ?? draftContext.optionValueSelected)
    );

    // select currently highlighted menu item
    draftContext.filterValue = selectedOption?.label ?? '';
    draftContext.isFilterValueDirty = false;
    draftContext.isOptionsExpanded = false;
    draftContext.optionValueSelected = selectedOption?.value ?? null;

    if (selectedOption) {
      const selectedOptionLabel = selectedOption.label;
      setTimeout(
        () => {
          // move cursor to end after clicking an option so it can be edited
          // take the update of the selection out of the loop so the state updates before it moves the cursor
          textInputRef.current?.setSelectionRange(selectedOptionLabel.length, selectedOptionLabel.length);
          textInputRef.current?.focus();
        },
        0
      );
    }
  } else {
    textInputRef.current?.focus();
    onSubmit?.();
  }
}
