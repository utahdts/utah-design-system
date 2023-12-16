import { useId } from 'react';
import { ComboBoxOption } from './ComboBoxOption';
import { ComboBoxOptionGroupContextProvider } from './context/ComboBoxOptionGroupContextProvider';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.label
 * @returns {JSX.Element}
 */
export function ComboBoxOptionGroup({
  children,
  label,
}) {
  const optionGroupId = useId();

  return (
    <ComboBoxOptionGroupContextProvider optionGroupId={optionGroupId}>

      <ComboBoxOption
        className="combo-box-input__group-wrapper combo-box-input__group-title"
        identifiesWithOptionGroupId={optionGroupId}
        isDisabled
        label={label}
        value={`${label}--group`}
      >
        {label}
      </ComboBoxOption>

      {children}

    </ComboBoxOptionGroupContextProvider>
  );
}
