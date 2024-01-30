import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TextInput } from '../forms/TextInput';
import { useTableContext } from './hooks/useTableContext';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @template TableDataT
 * @param {object} props
 * @param {string} [props.className]
 * @param {TableDataT} [props.defaultValue]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {(e: React.ChangeEvent) => TableDataT} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {TableDataT} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDate({
  className,
  defaultValue,
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
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    // @ts-ignore
    defaultOnChange: (e) => e.target?.value,
    defaultValue,
    onChange,
    value,
  });
  const { state: { tableId } } = useTableContext();
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-date', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`${tableId}__table-filter-date-${recordFieldPath}`}
        label={`Filter ${a11yLabel}`}
        onChange={currentOnChange}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}
