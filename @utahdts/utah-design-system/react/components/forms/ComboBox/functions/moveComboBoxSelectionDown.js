// @ts-check
import { isOptionGroupVisible } from './isOptionGroupVisible';

/** @typedef {import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */
/** @typedef {import('../../../../jsDocTypes').MultiSelectContextValue} MultiSelectContextValue */

/**
 * @param {import('immer').Draft<ComboBoxContextValue>} draftContext
 * @param {MultiSelectContextValue} multiSelectContext
 */
export function moveComboBoxSelectionDown(draftContext, multiSelectContext) {
  const { optionsFiltered: optionsWithHiddenGroups } = draftContext;

  const optionsToUse = optionsWithHiddenGroups.filter(
    (option) => (
      !multiSelectContext?.selectedValues.includes(option.value)
      && isOptionGroupVisible((option.isGroupLabel ? option.optionGroupId : null) ?? null, option.label, optionsWithHiddenGroups)
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
