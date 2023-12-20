import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TextInput } from '../forms/TextInput';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @template TableDataT
 * @param {object} props
 * @param {string} [props.className]
 * @param {TableDataT} [props.defaultValue]
 * @param {React.RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {(e: React.ChangeEvent) => TableDataT} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {TableDataT} [props.value]
 * @returns {React.JSX.Element}
 */
export function TableFilterDate({
  className,
  defaultValue,
  innerRef,
  id,
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
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-date', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`table-filter-date-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}
