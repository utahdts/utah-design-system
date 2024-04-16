import { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useImmer } from 'use-immer';
import { popupPlacement } from '../../enums/popupPlacement';
import { joinClassNames } from '../../util/joinClassNames';
import { CalendarInput } from '../forms/CalendarInput/CalendarInput';
import { DateInput } from '../forms/DateInput';
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
 * @param {boolean} props.isPopupOpen
 * @param {(newValue: string) => void} props.onChange
 * @param {import('react').RefObject<HTMLDivElement>} props.popperReferenceElement
 * @param {string} props.tableFilterDateId
 * @param {string} props.value
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDatePopup({
  dateFormat,
  isPopupOpen,
  onChange,
  popperReferenceElement,
  tableFilterDateId,
  value,
}) {
  const beginDateRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const popUpDivRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [currentInput, setCurrentInput] = useImmer(/** @type {BeginEndDate} */(BeginEndDates.BEGIN));
  const { styles, attributes, update } = usePopper(
    popperReferenceElement.current,
    popUpDivRef.current,
    {
      placement: popupPlacement.BOTTOM,
      modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
      ],
    }
  );

  useEffect(
    () => {
      if (update) {
        update();
      }
    },
    [isPopupOpen, update]
  );

  useEffect(
    () => {
      // when popup first opens, focus on the begin date
      if (isPopupOpen) {
        const beginDateInput = beginDateRef.current?.querySelector('.date-input');
        // @ts-ignore
        beginDateInput?.focus();
      }
    },
    [isPopupOpen]
  );

  const [beginDateStr, endDateStr] = (value || '').split(tableConstants.dateFilterSeparator);

  return (
    <div
      aria-labelledby={tableFilterDateId}
      className={joinClassNames(
        'table-filter-date__popup',
        !isPopupOpen && 'visually-hidden'
      )}
      style={styles.popper}
      ref={popUpDivRef}
      {...attributes.popper}
    >
      {
        isPopupOpen
          ? (
            <>
              <DateInput
                className="table-filter-date-popup__begin-date"
                dateFormat={dateFormat}
                hasCalendarPopup={false}
                id={`${tableFilterDateId}__begin-date`}
                innerRef={beginDateRef}
                isClearable
                label="Date Begin"
                onChange={(newValue) => onChange(formatNewValue(BeginEndDates.BEGIN, newValue, beginDateStr, endDateStr))}
                onClear={() => onChange(formatNewValue(BeginEndDates.BEGIN, '', beginDateStr, endDateStr))}
                value={beginDateStr}
                // @ts-ignore
                onFocus={() => setCurrentInput(BeginEndDates.BEGIN)}
              />
              <DateInput
                className="table-filter-date-popup__end-date"
                dateFormat={dateFormat}
                hasCalendarPopup={false}
                id={`${tableFilterDateId}__end-date`}
                isClearable
                label="Date End"
                onChange={(newValue) => onChange(formatNewValue(BeginEndDates.END, newValue, beginDateStr, endDateStr))}
                onClear={() => onChange(formatNewValue(BeginEndDates.END, '', beginDateStr, endDateStr))}
                value={endDateStr}
                // @ts-ignore
                onFocus={() => setCurrentInput(BeginEndDates.END)}
              />
              <CalendarInput
                className="table-filter-date-popup__calendar"
                dateFormat={dateFormat}
                id={`${tableFilterDateId}__calendar`}
                label={`Calendar for table filter ${currentInput === BeginEndDates.BEGIN ? 'begin' : 'end'} date`}
                labelClassName="visually-hidden"
                onChange={(newValue) => onChange(formatNewValue(currentInput, newValue, beginDateStr, endDateStr))}
                showTodayButton
                value={(currentInput === BeginEndDates.BEGIN ? beginDateStr : endDateStr) ?? ''}
              />
            </>
          )
          : null
      }
    </div>
  );
}
