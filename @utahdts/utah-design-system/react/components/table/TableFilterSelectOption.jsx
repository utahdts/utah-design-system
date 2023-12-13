// @ts-check
import React from 'react';
import SelectOption from '../forms/SelectOption';

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.RefObject<HTMLOptionElement>} [props.innerRef]
 * @param {string} props.label
 * @param {string | number} props.value
 * @returns {JSX.Element}
 */
export function TableFilterSelectOption({
  className,
  innerRef,
  label,
  value,
  ...rest
}) {
  return (
    <SelectOption
      className={className ?? undefined}
      innerRef={innerRef ?? undefined}
      label={label}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
