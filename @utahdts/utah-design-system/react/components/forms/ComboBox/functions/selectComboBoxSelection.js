// @ts-check

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {(() => void) | undefined} onSubmit
 */
export function selectComboBoxSelection(draftContext, onSubmit) {
  if (draftContext.isOptionsExpanded) {
    // select currently highlighted menu item
    const selectedOption = draftContext.options.find((option) => option.value === draftContext.selectedOptionValue);
    draftContext.filterValue = selectedOption?.label ?? '';
    draftContext.isOptionsExpanded = false;
  } else {
    onSubmit?.();
  }
}
