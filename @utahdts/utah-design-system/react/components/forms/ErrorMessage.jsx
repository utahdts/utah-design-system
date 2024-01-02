import React from 'react';

/**
 * @param {object} props
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @returns {React.JSX.Element | null}
 */
export function ErrorMessage({ errorMessage, id }) {
  return (
    errorMessage
      ? (
        <div className="input-wrapper__error-message" id={`${id}-error`}>
          {errorMessage}
        </div>
      )
      : null
  );
}
