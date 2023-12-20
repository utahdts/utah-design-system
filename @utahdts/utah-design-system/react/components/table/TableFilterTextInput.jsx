import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { TextInput } from '../forms/TextInput';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {React.RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {((e: React.ChangeEvent) => (string | void | undefined))} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string} [props.value]
 * @returns {React.JSX.Element}
 */
export function TableFilterTextInput({
  className,
  defaultValue,
  exactMatch,
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

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-text-input', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`table-filter-text-input-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        onClear={() => setValue('')}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}
