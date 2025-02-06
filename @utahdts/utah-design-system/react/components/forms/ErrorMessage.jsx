/**
 * @param {object} props
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @returns {import('react').JSX.Element | null}
 */
export function ErrorMessage({ errorMessage, id }) {
  return (
    errorMessage
      ? (
        <div className="input-wrapper__error-message" id={`error__${id}`}>
          {errorMessage}
        </div>
      )
      : null
  );
}
