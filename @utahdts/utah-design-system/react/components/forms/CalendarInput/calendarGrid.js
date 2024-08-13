import { add, format, isValid } from 'date-fns';

/** @typedef {import('@utahdts/utah-design-system').CalendarGridValue} CalendarGridValue */
/** @typedef {import('@utahdts/utah-design-system').CalendarGridMonth} CalendarGridMonth */

/**
 * @param {Date} dateA
 * @param {Date} dateB
 * @returns {number} negative, 0, or positive indicative of sort order
 */
function dateIsEqualYM(dateA, dateB) {
  return (
    (dateA.getFullYear() - dateB.getFullYear())
    || (dateA.getMonth() - dateB.getMonth())
  );
}

/**
 * @param {Date | null} dateA
 * @param {Date | null} dateB
 * @returns {boolean}
 */
function dateIsEqualYMD(dateA, dateB) {
  return (
    !!dateA && !!dateB
    && dateA.getFullYear() === dateB.getFullYear()
    && dateA.getMonth() === dateB.getMonth()
    && dateA.getDate() === dateB.getDate()
  );
}

/**
 * @param {Date} infoDate single cell date in the grid for which to construct an information object
 * @param {Date | null} focusDate date currently receiving focus in the UI
 * @param {Date | null} selectedDate date selected in the UI
 * @param {Date} viewedMonthDate date of a day in the month currently being viewed
 * @returns {CalendarGridValue}
 */
function constructCalendarGridValue(infoDate, focusDate, selectedDate, viewedMonthDate) {
  return {
    date: infoDate,
    isFocusDate: dateIsEqualYMD(infoDate, [focusDate, selectedDate].find((testDate) => testDate && isValid(testDate)) ?? new Date()),
    isNextMonth: add(viewedMonthDate, { months: 1 }).getMonth() === infoDate.getMonth(),
    isPreviousMonth: add(viewedMonthDate, { months: -1 }).getMonth() === infoDate.getMonth(),
    isSelectedDate: dateIsEqualYMD(infoDate, selectedDate),
    isTodayDate: dateIsEqualYMD(infoDate, new Date()),
  };
}

/**
 * @param {Date | null} focusDate
 * @param {Date | null} selectedDate
 * @returns {CalendarGridMonth}
 */
export function calendarGrid(focusDate, selectedDate) {
  if (Number.isNaN(focusDate)) {
    throw new Error('calendarGrid: focusDate is invalid');
  }
  if (Number.isNaN(selectedDate)) {
    throw new Error('calendarGrid: selectedDate is invalid');
  }
  const viewedMonthDate = (focusDate && isValid(focusDate)) ? focusDate : new Date();
  const firstOfMonth = new Date(viewedMonthDate.getFullYear(), viewedMonthDate.getMonth(), 1);
  const startDayOfWeek = Number(format(firstOfMonth, 'e'));

  /** @type {CalendarGridMonth} */
  const calendarGridMonth = [];

  // some month grids have only 4 (aug 2025) or even 6 (feb 2026) rows!
  for (
    let loopDate = add(firstOfMonth, { days: -1 * startDayOfWeek + 1 });
    (
      // work all the way through the viewed month dates
      dateIsEqualYM(loopDate, viewedMonthDate) <= 0
      // make sure the last row is filled
      || calendarGridMonth[calendarGridMonth.length - 1]?.length !== 7
    );
    loopDate = add(loopDate, { days: 1 })
  ) {
    if (calendarGridMonth.length === 0 || calendarGridMonth[calendarGridMonth.length - 1]?.length === 7) {
      // @ts-expect-error
      calendarGridMonth.push([]);
    }
    calendarGridMonth[calendarGridMonth.length - 1]?.push(constructCalendarGridValue(loopDate, focusDate, selectedDate, viewedMonthDate));
  }
  return calendarGridMonth;
}
