// @ts-check
import React, { useId } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import { ComboBoxOption } from './ComboBoxOption';
import { ComboBoxOptionGroupContextProvider } from './context/ComboBoxOptionGroupContextProvider';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {string} props.label
 * @returns {JSX.Element}
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
        {label}
      </ComboBoxOption>

      {children}

    </ComboBoxOptionGroupContextProvider>
  );
}
