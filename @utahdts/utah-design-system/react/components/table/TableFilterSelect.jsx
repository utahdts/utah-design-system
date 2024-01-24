import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { Select } from '../forms/Select';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';
import { useTableContext } from './hooks/useTableContext';

/**
 * @template TableDataT
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string | number} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {((e: React.ChangeEvent) => TableDataT)} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string | number} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterSelect({
  children,
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
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    defaultOnChange: (
      /**
       * @param {import('react').BaseSyntheticEvent} e
       * @returns {any}
       */
      (e) => e.target.value
    ),
    defaultValue,
    onChange,
    value,
  });

  useTableFilterRegistration(recordFieldPath, !!exactMatch);

  const { state: { tableId } } = useTableContext();
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-select', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      <Select
        id={`${tableId}__table-filter-select-${recordFieldPath}`}
        label={`Filter ${a11yLabel}`}
        onChange={currentOnChange}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </Select>
    </th>
  );
}
