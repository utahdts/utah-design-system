import React, { useEffect } from 'react';
import { useMultiSelectContext } from './context/useMultiSelectContext';

/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */

/**
 * just registers its "children" as the option template to render selected tags
 * @param {object} props
 * @param {(selectedValue: string, selectedOption: ComboBoxOptionType) => React.JSX.Element} props.children render a selected option
 * @returns {null}
 */
export function MultiSelectTagTemplate({ children }) {
  const [, setMultiSelectContext] = useMultiSelectContext();

  // register that i exist!
  useEffect(
    () => {
      setMultiSelectContext((draftContext) => {
        if (draftContext.tagTemplate) {
          throw new Error('MultiSelect can only have one MultiSelectTagTemplate child.');
        }
        draftContext.tagTemplate = children;
      });

      // i no longer exist
      return () => setMultiSelectContext((draftContext) => {
        draftContext.tagTemplate = null;
      });
    },
    []
  );

  // rendering of templated tags happens in <MultiSelectTags />
  return null;
}
