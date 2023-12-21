/** @typedef {import('../../../../jsDocTypes').ComboBoxOption} ComboBoxOption */

/**
 * @param {string | null} optionGroupId the id of this option group being checked, or null if not a group
 * @param {string} optionLabel the label of this option group being checked
 * @param {ComboBoxOption[]} optionsFiltered including group options that aren't removed from the filter but may not be visible
 * @param {string[]} selectedValues multi-select removes options that have been selected
 * @returns {boolean}
 */
export function isOptionGroupVisible(optionGroupId, optionLabel, optionsFiltered, selectedValues) {
  return (
    // if not an option group, then definitely visible
    !optionGroupId
    || (
      // if there are no filtered options, then nothing is being filtered, so the group will be shown
      !optionsFiltered.length
      // if there are filtered options, check that at least one of this group's children are still visible (skip checking self)
      || (
        optionsFiltered
          .filter((optionFiltered) => !selectedValues?.includes(optionFiltered.value))
          .some((optionFiltered) => optionFiltered.label !== optionLabel && optionFiltered.optionGroupId === optionGroupId)
      )
    )
  );
}
