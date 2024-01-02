import { isOptionGroupVisible } from './isOptionGroupVisible';

/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {MultiSelectContextValue} multiSelectContext
 */
export function moveComboBoxSelectionDown(draftContext, multiSelectContext) {
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
      ? 0
      : (selectionIndex + 1)
  );
  const nextIndex = currentSelectionIndex % optionsToUse.length;
  draftContext.optionValueHighlighted = optionsToUse[nextIndex]?.value ?? null;
  draftContext.optionValueFocused = optionsToUse[nextIndex]?.value ?? null;

  // open options after pressing down
  draftContext.isOptionsExpanded = true;
}
