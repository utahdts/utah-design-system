// @ts-check
import { useEffect } from 'react';
import notNull from '../../../util/notNull';
import useComboBoxContext from '../ComboBox/context/useComboBoxContext';
import useMultiSelectContext from './context/useMultiSelectContext';

/** @typedef {import('../../../jsDocTypes').ComboBoxOption} ComboBoxOption */

/**
 * @param {Object} props
 * @param {(selectedValue: string, selectedOption: ComboBoxOption) => JSX.Element} props.children function to call to render a selected option
 * @returns {JSX.Element[]}
 */
export function MultiSelectTagTemplate({ children }) {
  const [multiSelectContext, setMultiSelectContext] = useMultiSelectContext();
  const [comboBoxContext] = useComboBoxContext();

  // register that i exist!
  useEffect(
    () => {
      setMultiSelectContext((draftContext) => {
        draftContext.hasTagTemplate = true;
      });

      // i no longer exist
      return () => setMultiSelectContext((draftContext) => {
        draftContext.hasTagTemplate = false;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return multiSelectContext.selectedValues.map(
    (selectedValue) => children(selectedValue, notNull(comboBoxContext.options.find((option) => option.value === selectedValue), 'MultiSelectTagTemplate: selected option not found'))
  );
}
