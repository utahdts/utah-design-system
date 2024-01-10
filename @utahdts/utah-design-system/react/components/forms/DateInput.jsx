import { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useImmer } from 'use-immer';
import { popupPlacement } from '../../enums/popupPlacement';
import { joinClassNames } from '../../util/joinClassNames';
import { Icons } from '../icons/Icons';
import { CalendarInput } from './CalendarInput/CalendarInput';
import { useFormContextInputValue } from './FormContext/useFormContextInputValue';
import { TextInput } from './TextInput';
import { Button } from '../../..';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name] defaults to id if not provided
 * @param {(newValue: string) => void} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {() => void} [props.onClear]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function DateInput({
  className,
  defaultValue,
  errorMessage,
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
  value,
  wrapperClassName,
  ...rest
}) {
  const [isCalendarPopupOpen, setIsCalendarPopupOpen] = useImmer(false);
  const popperReferenceElementRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const calendarRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const { styles, attributes, update } = usePopper(
    popperReferenceElementRef.current,
    calendarRef.current,
    {
      placement: popupPlacement.BOTTOM,
      modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
      ],
    }
  );
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

  useEffect(
    () => {
      if (update) {
        update();
      }
    },
    [isCalendarPopupOpen, currentValue, update]
  );

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper--date-input', wrapperClassName)}
      ref={innerRef}
    >
      <div className="input-wrapper--date-input-inner">
        <div>
          <TextInput
            className={className}
            errorMessage={errorMessage}
            id={id}
            innerRef={popperReferenceElementRef}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            labelClassName={labelClassName}
            name={name}
            onChange={(e) => currentOnChange(e.target.value)}
            onClear={currentOnClear}
            // TODO: down arrow should open calendar picker
            onKeyUp={() => { }}
            placeholder={placeholder}
            value={currentValue}
            // @ts-ignore
            onBlur={() => {
              // give time for new item to be come focused
              setTimeout(
                () => {
                  // if still active inside the wrapper, don't close the popup
                  if (!document.activeElement?.closest('.input-wrapper--date-input')) {
                    setIsCalendarPopupOpen(false);
                  }
                },
                0
              );
            }}
            onClick={() => setIsCalendarPopupOpen(true)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
          {/* TODO: calendar icon goes here */}
          <Icons.IconSadFace />
        </div>
        <CalendarInput
          label={label}
          labelClassName="visually-hidden"
          isDisabled={isDisabled}
          isHidden={!isCalendarPopupOpen}
          onChange={(newValue) => {
            currentOnChange(newValue);
            setIsCalendarPopupOpen(false);
          }}
          id={`${id}__calendar-input`}
          innerRef={calendarRef}
          value={currentValue}
          wrapperClassName={isCalendarPopupOpen ? '' : 'visually-hidden'}
          // @ts-ignore
          style={{
            ...styles.popper,
            minWidth: popperReferenceElementRef.current?.scrollWidth,
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...attributes.popper}
        />
        {
          isCalendarPopupOpen
            ? (
              <Button
                onClick={() => setIsCalendarPopupOpen(false)}
                type="button"
              >
                <Icons.IconDangerous />
              </Button>
            )
            : null
        }
      </div>
    </div>
  );
}
