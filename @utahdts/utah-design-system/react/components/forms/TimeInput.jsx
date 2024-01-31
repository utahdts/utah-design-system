import { add, format, isValid, parse } from 'date-fns';
import { useMemo } from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { ComboBox } from './ComboBox/ComboBox';
import { ComboBoxOption } from './ComboBox/ComboBoxOption';
import { useFormContextInputValue } from './FormContext/useFormContextInputValue';
import { TextInput } from './TextInput';

/**
 * @param {object} props
 * @param {boolean} [props.allowCustomEntry] can the user type in their own time that is not in the popup combobox list
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {boolean} [props.hasTimePopup] is there a popup from which the user can select the time?
 * @param {string} props.id when tied to a Form, the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isClearable] should the clearable "X" icon be shown; is auto set to true if onClear is passed in
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {(newValue: string) => void} [props.onChange] can be omitted to be uncontrolled OR controlled by form
 * @param {() => void} [props.onClear] (not needed if inside a <Form> context)
 * @param {string} [props.placeholder]
 * @param {string} [props.timeFormat] use `date-fns` modifiers for formatting the time options
 * @param {number} [props.timeRangeIncrement] for popup, what increment (in minutes) for the options given to the user
 * @param {string} [props.timeRangeBegin] options in popup can start (inclusive) at a given time; format per `props.timeFormat`
 * @param {string} [props.timeRangeEnd] options in popup can end at the given time (inclusive); format per `props.timeFormat`
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function TimeInput({
  allowCustomEntry,
  className,
  defaultValue,
  errorMessage,
  hasTimePopup = true,
  id,
  innerRef,
  isClearable,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  name,
  onChange,
  onClear,
  placeholder,
  timeFormat = 'h:mm aaa',
  timeRangeBegin,
  timeRangeEnd,
  timeRangeIncrement = 15,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    onChange: currentOnChange,
    onClear: currentOnClear,
    value: currentValue,
  } = useFormContextInputValue({
    defaultValue,
    id,
    onChange,
    onClear,
    value,
  });

  const timeOptions = useMemo(
    () => {
      const defaultStartDate = new Date(new Date().setHours(0, 0, 0, 0));
      const defaultEndDate = new Date(new Date().setHours(23, 59, 0, 0));

      let optionsBeginDate = (timeRangeBegin && parse(timeRangeBegin, timeFormat, new Date())) || null;
      optionsBeginDate = (optionsBeginDate && isValid(optionsBeginDate)) ? optionsBeginDate : defaultStartDate;

      let optionsEndDate = (timeRangeEnd && parse(timeRangeEnd, timeFormat, new Date())) || null;
      optionsEndDate = (optionsEndDate && isValid(optionsEndDate)) ? optionsEndDate : defaultEndDate;

      const timeOptionsRet = [];
      for (
        let loopDate = optionsBeginDate;
        loopDate.getTime() <= optionsEndDate.getTime();
        loopDate = add(loopDate, { minutes: timeRangeIncrement })
      ) {
        timeOptionsRet.push(format(loopDate, timeFormat));
      }

      return timeOptionsRet;
    },
    [timeRangeBegin, timeRangeEnd, timeRangeIncrement]
  );

  const clockIcon = useMemo(
    () => (
      <span className={joinClassNames('utds-icon-before-clock', 'time-input__clock-icon', isDisabled && 'time-input__clock-icon--is-disabled', !hasTimePopup && 'time-input__clock-icon--static')} aria-hidden="true" />
    ),
    [isDisabled, hasTimePopup]
  );

  return (
    <div className={joinClassNames('time-input__wrapper', wrapperClassName)} ref={innerRef}>
      {
        hasTimePopup
          ? (
            <ComboBox
              // COMMON PROPS: make sure these match with TextInput
              className={className}
              errorMessage={errorMessage}
              id={id}
              isClearable={isClearable}
              isDisabled={isDisabled}
              isRequired={isRequired}
              label={label}
              labelClassName={labelClassName}
              name={name || id}
              onClear={isClearable ? currentOnClear : undefined}
              placeholder={placeholder}
              value={currentValue}
              // END COMMON PROPS
              allowCustomEntry={allowCustomEntry}
              iconCallback={() => clockIcon}
              onChange={currentOnChange}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            >
              {
                timeOptions.map((timeOption) => (
                  <ComboBoxOption
                    key={`time-input__${id}__${timeOption}`}
                    label={timeOption}
                    value={timeOption}
                  />
                ))
              }
            </ComboBox>
          )
          : (
            <TextInput
              // COMMON PROPS: make sure these match with ComboBox
              className={className}
              errorMessage={errorMessage}
              id={id}
              isClearable={isClearable}
              isDisabled={isDisabled}
              isRequired={isRequired}
              label={label}
              labelClassName={labelClassName}
              name={name || id}
              onClear={isClearable ? currentOnClear : undefined}
              placeholder={placeholder}
              value={currentValue}
              // END COMMON PROPS
              onChange={(e) => currentOnChange(e.target.value)}
              rightContent={clockIcon}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            />
          )
      }
    </div>
  );
}
