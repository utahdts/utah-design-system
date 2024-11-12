import { isOptionGroupVisible } from './isOptionGroupVisible';

/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {HTMLInputElement | null} textInput
 * @param {MultiSelectContextValue} multiSelectContext
 */
export function moveComboBoxSelectionUp(draftContext, textInput, multiSelectContext) {
  if (draftContext.isOptionsExpanded) {
    const { optionsFiltered: optionsWithHiddenGroups } = draftContext;

    const optionsToUse = optionsWithHiddenGroups.filter(
      (option) => (
        !multiSelectContext?.selectedValues.includes(option.value)
        && isOptionGroupVisible(
          (option.isGroupLabel ? option.optionGroupId : null) ?? null,
          option.label,
          optionsWithHiddenGroups,
          multiSelectContext.selectedValues
        )
      )
    );

    // get index of currently selected item in the filtered items list
    const selectionIndex = optionsToUse.findIndex(
      (option) => option.value === (draftContext.optionValueHighlighted ?? draftContext.optionValueSelected)
    );
    const currentSelectionIndex = (
      selectionIndex === -1
        ? optionsToUse.length - 1
        : (selectionIndex - 1)
    );
    if (currentSelectionIndex >= 0) {
      const newHighlightedValue = optionsToUse[currentSelectionIndex]?.value ?? null;
      draftContext.optionValueHighlighted = newHighlightedValue;
      draftContext.optionValueFocused = newHighlightedValue;
      // @ts-expect-error this works? querySelector returns a single element so how is it doing an array selector? be careful touching this...
      document.querySelector(`[value="${newHighlightedValue}"]`)?.[0]?.focus();
    } else {
      // if at top, then close the options list
      draftContext.isOptionsExpanded = false;
      draftContext.optionValueHighlighted = null;
      draftContext.optionValueFocused = null;
      textInput?.focus();
    }
  }
}
