import { useCallback, useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { useGlobalKeyEvent } from '../../hooks/useGlobalKeyEvent';
import { joinClassNames } from '../../util/joinClassNames';
import { CalendarInput } from '../forms/CalendarInput/CalendarInput';
import { DateInput } from '../forms/DateInput';
import { Popup } from '../popups/Popup';
import { tableConstants } from './tableConstants';

/** @typedef { 'BEGIN' | 'END' } BeginEndDate */
/** @enum {BeginEndDate} */
const BeginEndDates = {
  BEGIN: /** @type {BeginEndDate} */ ('BEGIN'),
  END: /** @type {BeginEndDate} */ ('END'),
};

/**
 * @param {BeginEndDate} whichInput
 * @param {string} newValue
 * @param {string | undefined} currentBeginDate
 * @param {string | undefined} currentEndDate
 * @returns {string}
 */
function formatNewValue(whichInput, newValue, currentBeginDate, currentEndDate) {
  const beginDateStr = whichInput === BeginEndDates.BEGIN ? newValue : (currentBeginDate || '');
  const endDateStr = whichInput === BeginEndDates.END ? newValue : (currentEndDate || '');
  return `${beginDateStr}${tableConstants.dateFilterSeparator}${endDateStr}`;
}

/**
 * @param {object} props
 * @param {string} [props.dateFormat]
 * @param {string} props.id
 * @param {boolean} props.isPopupOpen
 * @param {(newValue: string) => void} props.onChange
 * @param {import('react').RefObject<HTMLDivElement | null>} props.popperReferenceElement
 * @param {(isPopupOpen: boolean) => void} props.setIsPopupOpen
 * @param {string} props.tableFilterDateId
 * @param {string} props.value
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDateRangePopup({
  dateFormat,
  id,
  isPopupOpen,
  onChange,
  popperReferenceElement,
  setIsPopupOpen,
  tableFilterDateId,
  value,
}) {
  const beginDateRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [currentInput, setCurrentInput] = useImmer(/** @type {BeginEndDate} */(BeginEndDates.BEGIN));
  const calendarInputRef = useRef(/** @type {HTMLDivElement | null} */(null));

  useEffect(
    () => {
      // when popup first opens, focus on the begin date
      if (isPopupOpen) {
        const beginDateInput = beginDateRef.current?.querySelector('.date-input');
        // @ts-expect-error
        beginDateInput?.focus();
      }
    },
    [isPopupOpen]
  );

  const [beginDateStr, endDateStr] = (value || '').split(tableConstants.dateFilterSeparator);

  // close popup anytime the escape key is pressed
  useGlobalKeyEvent({ whichKeyCode: 'Escape', onKeyUp: useCallback(() => setIsPopupOpen(false), []) });

  const moveToCalendarInput = useCallback(
    /** @param {React.KeyboardEvent<HTMLInputElement>} e */
    (e) => {
      // move to calendar input on key down
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const focusOnThis = /** @type {HTMLElement | null} */ (calendarInputRef.current?.querySelector('.calendar-input__cell--focused'));
        focusOnThis?.focus();
      }
    },
    []
  );

  return (
    <Popup
      ariaLabelledBy={tableFilterDateId}
      className={joinClassNames(
        'table-filter-date__popup',
        !isPopupOpen && 'visually-hidden'
      )}
      hasCloseButton
      id={id}
      isVisible={isPopupOpen}
      onVisibleChange={(_, isVisible) => setIsPopupOpen(isVisible)}
      popperUpdateDependencies={[beginDateStr, endDateStr]}
      referenceElement={popperReferenceElement}
      role="dialog"
    >
      <div className="flex gap-xs full-width">
        <DateInput
          ariaLabel="Date Filter Date Begin."
          className="table-filter-date-popup__begin-date"
          dateFormat={dateFormat}
          hasCalendarPopup={false}
          id={`table-filter-date-range-popup__${tableFilterDateId}__begin-date`}
          innerRef={beginDateRef}
          isClearable
          label="Date Begin"
          onChange={(newValue) => onChange(formatNewValue(BeginEndDates.BEGIN, newValue, beginDateStr, endDateStr))}
          onClear={() => onChange(formatNewValue(BeginEndDates.BEGIN, '', beginDateStr, endDateStr))}
          value={beginDateStr}
          onKeyUp={moveToCalendarInput}
          // @ts-expect-error
          onFocus={() => setCurrentInput(BeginEndDates.BEGIN)}
        />
        <DateInput
          ariaLabel="Date Filter Date End."
          className="table-filter-date-popup__end-date"
          dateFormat={dateFormat}
          hasCalendarPopup={false}
          id={`table-filter-date-range-popup__${tableFilterDateId}__end-date`}
          isClearable
          label="Date End"
          onChange={(newValue) => onChange(formatNewValue(BeginEndDates.END, newValue, beginDateStr, endDateStr))}
          onClear={() => onChange(formatNewValue(BeginEndDates.END, '', beginDateStr, endDateStr))}
          onKeyUp={moveToCalendarInput}
          value={endDateStr}
          // @ts-expect-error
          onFocus={() => setCurrentInput(BeginEndDates.END)}
        />
      </div>
      <div>
        <div className="table-filter-date-popup__selected-date-chiclets">
          <div
            className={joinClassNames(
              'table-filter-date-popup__selected-date-chiclet',
              currentInput === BeginEndDates.BEGIN
                ? 'table-filter-date-popup__selected-date-chiclet--selected'
                : 'table-filter-date-popup__selected-date-chiclet--not-selected'
            )}
          />
          <div
            className={joinClassNames(
              'table-filter-date-popup__selected-date-chiclet',
              currentInput === BeginEndDates.END
                ? 'table-filter-date-popup__selected-date-chiclet--selected'
                : 'table-filter-date-popup__selected-date-chiclet--not-selected'
            )}
          />
        </div>
        <hr />
        <CalendarInput
          className="table-filter-date-popup__calendar"
          dateFormat={dateFormat}
          id={`calendar-input__${tableFilterDateId}`}
          innerRef={calendarInputRef}
          label={`Calendar for table filter ${currentInput === BeginEndDates.BEGIN ? 'begin' : 'end'} date`}
          labelClassName="visually-hidden"
          onChange={(newValue) => onChange(formatNewValue(currentInput, newValue, beginDateStr, endDateStr))}
          showTodayButton
          value={(currentInput === BeginEndDates.BEGIN ? beginDateStr : endDateStr) ?? ''}
        />
      </div>
    </Popup>
  );
}
