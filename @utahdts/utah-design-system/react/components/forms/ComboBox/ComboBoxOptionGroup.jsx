import { useId } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { ComboBoxOption } from './ComboBoxOption';
import { ComboBoxOptionGroupContextProvider } from './context/ComboBoxOptionGroupContextProvider';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} props.label
 * @returns {import('react').JSX.Element}
 */
export function ComboBoxOptionGroup({
  children,
  className,
  label,
}) {
  const optionGroupId = useId();

  return (
    <ComboBoxOptionGroupContextProvider optionGroupId={optionGroupId}>

      <ComboBoxOption
        className={joinClassNames(
          'combo-box-input__group-wrapper',
          'combo-box-input__group-title',
          className
        )}
        identifiesWithOptionGroupId={optionGroupId}
        isDisabled
        label={label}
        value={`${label}--group`}
      >
        <span>{label}</span>
      </ComboBoxOption>

      {children}

    </ComboBoxOptionGroupContextProvider>
  );
}
