import {
  add,
  format,
  parse
} from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../../../..';
import { joinClassNames } from '../../../util/joinClassNames';
import { Icons } from '../../icons/Icons';
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
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isHidden] a dateInput will hide its calendar popup when not in use
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {(newValue: string) => void} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {() => void} [props.onClear]
 * @param {string} [props.value] expects value to be in format of MM/DD/YYYY
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function CalendarInput({
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isClearable,
  isDisabled,
  isHidden,
  isRequired,
  label,
  labelClassName,
  onChange,
  onClear,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    onChange: currentOnChange,
    onClear: currentOnClear,
    value: currentValue,
  } = useFormContextInputValue({
    id,
    defaultValue,
    onChange,
    onClear,
    value,
  });

  const currentValueDate = currentValue ? parse(currentValue, 'MM/dd/yyyy', new Date()) : null;
  const [currentValueDateInternal, setCurrentValueDateInternal] = useState(currentValue ? parse(currentValue, 'MM/dd/yyyy', new Date()) : new Date());

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
  const calendarGridValues = useMemo(() => calendarGrid(currentValueDateInternal), [currentValueDateInternal]);

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
            <Button
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate, { months: -1 }))}
              type="button"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            >
              <Icons.IconArrowLeft />
            </Button>

          </div>
          <div>{format(calendarMonthDate, 'MMMM')}</div>
          <div>
            <Button
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate, { months: 1 }))}
              type="button"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            >
              <Icons.IconArrowRight />
            </Button>

          </div>
        </div>
        <div className="calendar-input__controls-year">
          <div>
            <Button
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate, { years: -1 }))}
              type="button"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            >
              <Icons.IconArrowLeft />
            </Button>

          </div>
          <div>{calendarMonthDate.getFullYear()}</div>
          <div>
            <Button
              isDisabled={isDisabled}
              onClick={() => setCurrentValueDateInternal((draftDate) => add(draftDate, { years: 1 }))}
              type="button"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            >
              <Icons.IconArrowRight />
            </Button>

          </div>
        </div>
        {/* <div className="calendar-input__controls-buttons">
          {
            isClearable
              ? (
                <Button
                  isDisabled={isDisabled}
                  onClick={currentOnClear}
                  type="button"
                  // @ts-ignore
                  tabIndex={isHidden ? -1 : 0}
                >
                  <Icons.IconDangerous />
                </Button>
              )
              : null
          }
        </div> */}
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
                      className="calendar-input__cell"
                      isDisabled={isDisabled}
                      key={`calendar-input__cell__${cellGridValue.date.getTime()}`}
                      onClick={() => {
                        currentOnChange?.(format(cellGridValue.date, 'MM/dd/yyyy'));
                      }}
                      type="button"
                      // @ts-ignore
                      role="gridcell"
                      tabIndex={(isHidden || !cellGridValue.isCurrentDate) ? -1 : 0}
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
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
