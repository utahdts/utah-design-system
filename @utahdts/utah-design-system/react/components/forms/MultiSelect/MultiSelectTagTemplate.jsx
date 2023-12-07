// @ts-check
import { useEffect } from 'react';
import useMultiSelectContext from './context/useMultiSelectContext';

/** @typedef {import('../../../jsDocTypes').ComboBoxOption} ComboBoxOption */

/**
 * just registers its "children" as the option template to render selected tags
 * @param {Object} props
 * @param {(selectedValue: string, selectedOption: ComboBoxOption) => JSX.Element} props.children function to call to render a selected option
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // rendering of templated tags happens in <MultiSelectTags />
  return null;
}
