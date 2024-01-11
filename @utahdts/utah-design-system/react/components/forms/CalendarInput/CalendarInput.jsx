import {
  add,
  format,
  parse
} from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { Button, IconButton } from '../../../..';
import { joinClassNames } from '../../../util/joinClassNames';
import { ErrorMessage } from '../ErrorMessage';
import { useFormContextInputValue } from '../FormContext/useFormContextInputValue';
import { RequiredStar } from '../RequiredStar';
import { calendarGrid } from './calendarGrid';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue] expects value to be in format of MM/DD/YYYY
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isHidden] a dateInput will hide its calendar popup when not in use
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {(newValue: string) => void} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {boolean} [props.showTodayButton]
 * @param {string | null} [props.value] expects value to be in format of MM/DD/YYYY
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function CalendarInput({
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isDisabled,
  isHidden,
  isRequired,
  label,
  labelClassName,
  onChange,
  showTodayButton,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    onChange: currentOnChange,
    value: currentValue,
  } = useFormContextInputValue({
    id,
    defaultValue,
    onChange,
    value,
  });

  // currentValueDate is the currently selected date
  const currentValueDate = currentValue ? parse(currentValue, 'MM/dd/yyyy', new Date()) : null;

  // currentValueDateInternal is the currently focused date (not necessarily the selected/value date)
  const [currentValueDateInternal, setCurrentValueDateInternal] = useState(/** @type {Date | null} */(null));

  // if new value passed in, move to that month
  useEffect(
    () => {
      if (currentValueDateInternal?.getTime() !== currentValueDate?.getTime()) {
        setCurrentValueDateInternal(currentValueDate ?? new Date());
      }
    },
    [currentValueDate?.getTime()]
  );

  const calendarMonthDate = currentValueDateInternal ?? new Date();
  const calendarGridValues = useMemo(() => calendarGrid(currentValueDateInternal, currentValueDate), [currentValueDateInternal]);

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper--calendar-input', wrapperClassName, className)}
      ref={innerRef}
      {...rest}
    >
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <div className="calendar-input__controls">
        <div className="calendar-input__controls-month">
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-chevron-left" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate ?? new Date(), { months: -1 }))}
              title="Previous Month"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
          <div className="calendar-input__month">{format(calendarMonthDate, 'MMMM')}</div>
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-chevron-right" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate ?? new Date(), { months: 1 }))}
              title="Next Month"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
        </div>
        <div className="calendar-input__controls-year">
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-chevron-left" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate ?? new Date(), { years: -1 }))}
              title="Last Year"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
          <div className="calendar-input__year">{calendarMonthDate.getFullYear()}</div>
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-chevron-right" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate ?? new Date(), { years: 1 }))}
              title="Next Year"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
        </div>
      </div>
      <div className="calendar-input__grid" id={id}>
        <div className="calendar-input__row" role="row">
          <span className="calendar-input__cell-header" role="gridcell">Su</span>
          <span className="calendar-input__cell-header" role="gridcell">Mo</span>
          <span className="calendar-input__cell-header" role="gridcell">Tu</span>
          <span className="calendar-input__cell-header" role="gridcell">We</span>
          <span className="calendar-input__cell-header" role="gridcell">Th</span>
          <span className="calendar-input__cell-header" role="gridcell">Fr</span>
          <span className="calendar-input__cell-header" role="gridcell">Sa</span>
        </div>
        {
          calendarGridValues.map(
            (weekGridValues, weekGridValuesIndex) => (
              <div
                className="calendar-input__row"
                // eslint-disable-next-line react/no-array-index-key
                key={`calendar-input__row__${weekGridValuesIndex}`}
                role="row"
              >
                {
                  weekGridValues.map((cellGridValue) => (
                    <Button
                      className={joinClassNames(
                        'calendar-input__cell',
                        cellGridValue.isFocusDate && 'calendar-input__cell--focused',
                        cellGridValue.isNextMonth && 'calendar-input__cell--next-month',
                        cellGridValue.isPreviousMonth && 'calendar-input__cell--previous-month',
                        cellGridValue.isSelectedDate && 'calendar-input__cell--selected',
                        cellGridValue.isTodayDate && 'calendar-input__cell--today'
                      )}
                      isDisabled={isDisabled}
                      key={`calendar-input__cell__${cellGridValue.date.getTime()}`}
                      onClick={() => {
                        currentOnChange?.(format(cellGridValue.date, 'MM/dd/yyyy'));
                      }}
                      type="button"
                      // @ts-ignore
                      role="gridcell"
                      tabIndex={(isHidden || !cellGridValue.isSelectedDate) ? -1 : 0}
                    >
                      {cellGridValue.date.getDate()}
                    </Button>
                  ))
                }
              </div>
            )
          )
        }
      </div>
      {
        showTodayButton
          ? (
            <div className="calendar-input__today" id={id}>
              <button
                className="button--small"
                onClick={() => {
                  setCurrentValueDateInternal(new Date());
                  currentOnChange(format(new Date(), 'MM/dd/yyyy'));
                }}
                type="button"
              >
                Today
              </button>
            </div>
          )
          : null
      }
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
