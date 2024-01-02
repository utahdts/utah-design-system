import { ComboBoxOptionGroup } from '../ComboBox/ComboBoxOptionGroup';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.label
 * @returns {import('react').JSX.Element}
 */
export function MultiSelectOptionGroup({
  children,
  label,
}) {
  return (
    <ComboBoxOptionGroup
      className="multi-select-option-group"
      label={label}
    >
      {children}
    </ComboBoxOptionGroup>
  );
}
