import { useEffect } from 'react';
import { ComboBoxOption } from '../ComboBox/ComboBoxOption';
import { useMultiSelectContext } from './context/useMultiSelectContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isStatic] static options are always visible and not filterable
 * @param {string} props.label
 * @param {string} [props.tagClassName] this class will be put on the tag when this option is selected
 * @param {string} props.value
 * @returns {import('react').JSX.Element | null}
 */
export function MultiSelectOption({
  children = null,
  isDisabled,
  isStatic,
  label,
  tagClassName,
  value,
}) {
  const [{ selectedValues }, setMultiSelectContext] = useMultiSelectContext();

  useEffect(
    () => {
      setMultiSelectContext((draftContext) => {
        // @ts-expect-error
        draftContext.optionTagClassNames[value] = tagClassName;
      });
      return () => {
        setMultiSelectContext((draftContext) => {
          delete draftContext.optionTagClassNames[value];
        });
      };
    },
    []
  );

  return (
    <ComboBoxOption
      isDisabled={isDisabled}
      isStatic={isStatic}
      isHidden={selectedValues.includes(value)}
      label={label}
      value={value}
    >
      {children}
    </ComboBoxOption>
  );
}
