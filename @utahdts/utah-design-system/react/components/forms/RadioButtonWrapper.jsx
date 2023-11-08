// @ts-check
/* eslint-disable react/prop-types */
import React, { useId } from 'react';
import joinClassNames from '../../util/joinClassNames';
import ErrorMessage from './ErrorMessage';
import RequiredStar from './RequiredStar';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @returns {JSX.Element}
 */
export function RadioButtonWrapper({
  children,
  className,
  errorMessage,
  isRequired,
  label,
}) {
  const id = useId();
  return (
    <>
      <fieldset id={id} className={joinClassNames('fieldset fieldset--radio-wrapper', className)}>
        {isRequired ? <RequiredStar /> : null}
        <legend>{label}</legend>
        {children}
      </fieldset>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </>
  );
}
