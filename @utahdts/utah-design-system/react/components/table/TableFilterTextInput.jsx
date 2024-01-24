import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TextInput } from '../forms/TextInput';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';
import { useTableContext } from './hooks/useTableContext';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {((e: React.ChangeEvent) => (string | void | undefined))} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterTextInput({
  className,
  defaultValue,
  exactMatch,
  innerRef,
  id,
  a11yLabel,
  onChange,
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
    // @ts-ignore
    defaultOnChange: (e) => e.target?.value,
    defaultValue,
    onChange,
    value,
  });

  useTableFilterRegistration(recordFieldPath, !!exactMatch);
  const { state: { tableId } } = useTableContext();

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-text-input', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`${tableId}__table-filter-text-input-${recordFieldPath}`}
        label={`Filter ${a11yLabel || recordFieldPath}`}
        onChange={currentOnChange}
        onClear={() => setValue('')}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}
