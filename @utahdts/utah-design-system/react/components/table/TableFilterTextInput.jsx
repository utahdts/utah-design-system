import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TextInput } from '../forms/TextInput';
import { useTableContext } from './hooks/useTableContext';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {((e: React.ChangeEvent) => (string | void | undefined))} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {string} props.recordFieldPath
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterTextInput({
  a11yLabel,
  className,
  defaultValue,
  exactMatch,
  id,
  innerRef,
  onChange,
  placeholder,
  recordFieldPath,
  value,
  ...rest
}) {
  const {
    currentOnChange,
    currentValue,
    setValue,
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    // @ts-expect-error
    defaultOnChange: (e) => e.target?.value,
    defaultValue,
    onChange,
    value,
  });
  useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch });
  const { state: { tableId } } = useTableContext();

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-text-input', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`table-filter-text-input__${tableId}__${recordFieldPath}`}
        label={`Filter ${a11yLabel || recordFieldPath}`}
        onChange={currentOnChange}
        onClear={() => setValue('')}
        placeholder={placeholder ?? 'Filter'}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}
