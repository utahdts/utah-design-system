import { useRef } from 'react';
import { useImmer } from 'use-immer';
import { useInterval } from '../../hooks/useInterval';
import { joinClassNames } from '../../util/joinClassNames';
import { TextInput } from '../forms/TextInput';
import { TableFilterDatePopup } from './TableFilterDatePopup';
import { useTableContext } from './hooks/useTableContext';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';
import { tableConstants } from './tableConstants';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.dateFormat]
 * @param {string} [props.defaultValue]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} props.id
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {(newValue: string) => void} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDateRange({
  className,
  dateFormat = 'MM/dd/yyyyy',
  defaultValue,
  innerRef,
  id,
  a11yLabel,
  onChange,
  recordFieldPath,
  value,
  ...rest
}) {
  useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch: false, isDateRange: true, dateRangeDateFormat: dateFormat });
  const { state: { tableId } } = useTableContext();
  const popperContentRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [state, setState] = useImmer({ isPopupOpen: false });

  const {
    currentOnChange,
    currentValue,
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    defaultOnChange: (
      /**
       * @param {string} newValue
       * @returns {string}
       */
      (newValue) => newValue
    ),
    defaultValue: defaultValue ?? null,
    onChange,
    value: value ?? null,
  });

  // close popup when lost focus
  useInterval(
    () => {
      if (!document.activeElement?.closest('.table-header__cell--filter-date')) {
        setState((draftState) => { draftState.isPopupOpen = false; });
      }
    },
    250,
    { isDisabled: !state.isPopupOpen }
  );

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-date', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`${tableId}__table-filter-date-${recordFieldPath}`}
        label={`Filter ${a11yLabel}`}
        isClearable
        onChange={() => { /* ignore on change for the "readonly" filter field; have to edit through popup */ }}
        onClear={() => { currentOnChange(''); }}
        rightContent={(
          <div className={joinClassNames('date-input__calendar-icon date-input__icon-static')}>
            <span className="utds-icon-before-calendar " aria-hidden="true" />
          </div>
        )}
        value={(!currentValue || currentValue === tableConstants.dateFilterSeparator) ? '' : currentValue.replace(tableConstants.dateFilterSeparator, ' -> ')}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        // @ts-ignore
        onBlur={
          () => {
            setTimeout(
              () => {
                // see if an element in the popup now has focus and if so leave the popup open
                if (!document.activeElement?.closest('.table-filter-date__popup')) {
                  setState((draftState) => { draftState.isPopupOpen = false; });
                }
              },
              1
            );
          }
        }
        onFocus={
          () => {
            setState((draftState) => {
              draftState.isPopupOpen = false;
            });
          }
        }
        onClick={
          () => {
            setState((draftState) => {
              draftState.isPopupOpen = true;
            });
          }
        }
        onKeyUp={
          (e) => {
            if (e.key === 'ArrowDown') {
              setState((draftState) => { draftState.isPopupOpen = true; });
            }
          }
        }
      />
      <TableFilterDatePopup
        dateFormat={dateFormat}
        isPopupOpen={state.isPopupOpen}
        onChange={currentOnChange}
        popperReferenceElement={popperContentRef}
        tableFilterDateId={id}
        value={currentValue || ''}
      />
    </th>
  );
}
