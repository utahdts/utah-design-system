/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */

/**
 * @param {string | null} optionGroupId the id of this option group being checked, or null if not a group
 * @param {string} optionLabel the label of this option group being checked
 * @param {ComboBoxOptionType[]} optionsFiltered including group options that aren't removed from the filter but may not be visible
 * @returns {boolean}
 */
export function isOptionGroupVisible(optionGroupId, optionLabel, optionsFiltered) {
  return (
    // if not an option group, then definitely visible
    !optionGroupId
    || (
      // if there are no filtered options, then nothing is being filtered, so the group will be shown
      !optionsFiltered.length
      // if there are filtered options, check that at least one of this group's children are still visible (skip checking self)
      || optionsFiltered.some((optionFiltered) => optionFiltered.label !== optionLabel && optionFiltered.optionGroupId === optionGroupId)
    )
  );
}
