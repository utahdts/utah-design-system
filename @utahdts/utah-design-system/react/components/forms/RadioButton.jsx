// @ts-check
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import joinClassNames from '../../util/joinClassNames';
import useFormContext from './FormContext/useFormContext';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultIsChecked] for uncontrolled components, what is the starting isChecked state
 * @param {React.RefObject} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isChecked]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} props.name
 * @param {EventAction} [props.onChange]
 * @param {string} props.value the html radio button's value to put in to the form data if this radio button is selected
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function RadioButton({
  className,
  defaultIsChecked,
  id,
  isChecked,
  isDisabled = false,
  innerRef,
  label,
  labelClassName,
  name,
  onChange,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    setState: formContextSetState,
    state: formContextState,
  } = useFormContext();

  useEffect(
    () => {
      if (defaultIsChecked) {
        formContextSetState?.((draftState) => { draftState[name] = value; });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  /** @type {string | undefined} */
  let currentValue;
  if (isChecked) {
    currentValue = value;
  } else if (isChecked === undefined) {
    currentValue = formContextState?.[name];
  } else {
    // isChecked === false (not checked)
    currentValue = undefined;
  }
  const isControlled = formContextState || (isChecked !== undefined);
  return (
    <div className={joinClassNames('input-wrapper input-wrapper--radio', wrapperClassName)}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
      </label>
      <input
        checked={isControlled ? currentValue === value : undefined}
        defaultChecked={defaultIsChecked}
        className={className}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={(e) => {
          if (onChange) {
            // controlled by parent
            // @ts-ignore
            onChange(e);
          } else if (formContextSetState) {
            // controlled by form context
            formContextSetState((draftState) => {
              draftState[name] = value;
            });
          }
          // else - uncontrolled so don't do anything
        }}
        ref={innerRef}
        type="radio"
        {...rest}
      />
    </div>
  );
}
