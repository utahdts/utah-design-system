// @ts-check
import React, { useCallback, useEffect, useState } from 'react';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import joinClassNames from '../../util/joinClassNames';
import setValueAtPath from '../../util/state/setValueAtPath';
import valueAtPath from '../../util/state/valueAtPath';
import ErrorMessage from './ErrorMessage';
import useFormContext from './FormContext/useFormContext';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {React.Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.labelOn]
 * @param {string} [props.labelOff]
 * @param {string} [props.name]
 * @param {((e: Event) => void)} [props.onChange] e => ...; optional if uncontrolled OR controlled by form
 * @param {'small' | 'medium' | 'large'} [props.size] formElementSizesEnum
 * @param {React.ReactNode} [props.sliderChildren]
 * @param {boolean} [props.value]
 * @param {number} [props.width]
 * @returns {JSX.Element}
 */
export default function Switch({
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isDisabled,
  label,
  labelClassName,
  labelOn,
  labelOff,
  name,
  onChange,
  size,
  sliderChildren,
  value,
  width,
  ...rest
}) {
  // there is no "uncontrolled" version of this component
  const { setState, state } = useFormContext();
  const [internalState, setInternalState] = useState(!!(defaultValue ?? value));

  // switch example was passing in a value but it wasn't updating the UI
  useEffect(
    () => {
      if (value !== undefined) {
        setState?.((draftState) => {
          setValueAtPath({
            object: draftState,
            path: id,
            value,
          });
        });
        setInternalState(!!value);
      }
    },
    [value]
  );

  const currentValue = valueAtPath({ object: state, path: id }) ?? internalState;

  const internalOnChange = useCallback(
    (e) => {
      if (setState) {
        setState((draftState) => {
          setValueAtPath({
            object: draftState,
            path: id,
            value: e.target.checked,
          });
        });
      } else {
        setInternalState(e.target.checked);
      }
    },
    [id, setState]
  );
  const currentOnChange = onChange ?? internalOnChange;

  return (
    <div
      className="input-wrapper input-wrapper--switch"
      ref={innerRef}
    >
      <label
        className={joinClassNames(
          'switch__wrapper',
          size && (size === formElementSizesEnum.MEDIUM ? null : `switch--${size}`),
          isDisabled ? 'switch--disabled' : null,
          currentValue && 'switch__wrapper--on'
        )}
        htmlFor={id}
        style={(width || width === 0) ? { width: `${width}px` } : undefined}
      >
        <span className={joinClassNames('switch__label', labelClassName)}>{label}</span>

        <input
          aria-describedby={errorMessage ? `${id}-error` : null}
          checked={currentValue}
          className={joinClassNames('switch visually-hidden', className)}
          disabled={isDisabled}
          id={id}
          name={name || id}
          // @ts-ignore
          onChange={currentOnChange}
          role="switch"
          type="checkbox"
          {...rest}
        />
        <span className={joinClassNames('switch__slider', currentValue && 'switch__slider--on')}>{sliderChildren}</span>
        {
          (labelOn || labelOff)
            ? (
              <span className="switch__inner-label">
                <span className={joinClassNames(currentValue ? 'show' : '', 'switch__inner-label-on')}>{labelOn}</span>
                <span className={joinClassNames(currentValue ? '' : 'show', 'switch__inner-label-off')}>{labelOff}</span>
              </span>
            )
            : null
        }
      </label>

      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
