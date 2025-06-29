import { useRef } from 'react';
import { useImmer } from 'use-immer';
import { useInterval } from '../../hooks/useInterval';
import { joinClassNames } from '../../util/joinClassNames';
import { Button } from '../buttons/Button';
import { IconButton } from '../buttons/IconButton';
import { TableFilterDateRangeButtonTitle } from './TableFilterDateRangeButtonTitle';
import { TableFilterDateRangePopup } from './TableFilterDateRangePopup';
import { useTableContext } from './hooks/useTableContext';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { tableConstants } from './tableConstants';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.dateFormat]
 * @param {string} [props.defaultValue]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} props.id
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {(newValue: string) => void} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {string} props.recordFieldPath
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDateRange({
  className,
  dateFormat = 'MM/dd/yyyy',
  defaultValue,
  innerRef,
  id,
  a11yLabel,
  onChange,
  placeholder,
  recordFieldPath,
  value,
  ...rest
}) {
  useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch: false, isDateRange: true, dateRangeDateFormat: dateFormat });
  const { state: { tableId } } = useTableContext();
  const popupContentRef = useRef(/** @type {HTMLDivElement | null} */(null));
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
  const popupId = `${id}-popup`;

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-date', className)} id={id ?? undefined} ref={innerRef}>
      <div ref={popupContentRef}>
        <Button
          aria-controls={popupId}
          aria-expanded={state.isPopupOpen}
          aria-haspopup="dialog"
          className={currentValue ? '' : 'table-header__cell--filter-date--is-empty'}
          id={`table-filter-date-range__${tableId}__${recordFieldPath}`}
          label={`Filter ${a11yLabel}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
          // @ts-expect-error
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
        >
          <TableFilterDateRangeButtonTitle currentValue={currentValue} placeholder={placeholder} />
        </Button>

        {/* Clear icon */}
        {
          (currentValue && currentValue !== tableConstants.dateFilterSeparator)
            ? (
              <IconButton
                className={joinClassNames('text-input__clear-button icon-button--borderless icon-button--small1x')}
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={() => currentOnChange('')}
                title="Clear filter"
              />
            )
            : null
        }

        {/* Calendar icon inside the button */}
        <div className={joinClassNames('date-input__calendar-icon date-input__icon-static', currentValue && currentValue !== tableConstants.dateFilterSeparator ? 'visually-hidden' : '')}>
          <span className="utds-icon-before-calendar " aria-hidden="true" />
        </div>
      </div>
      <TableFilterDateRangePopup
        dateFormat={dateFormat}
        id={popupId}
        isPopupOpen={state.isPopupOpen}
        onChange={currentOnChange}
        setIsPopupOpen={(newIsPopupOpen) => setState((draftState) => { draftState.isPopupOpen = newIsPopupOpen; })}
        popupReferenceElement={popupContentRef}
        tableFilterDateId={id}
        value={currentValue || ''}
      />
    </th>
  );
}
