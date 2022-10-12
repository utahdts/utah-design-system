import PropTypes from 'prop-types';

const propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

};
const defaultProps = {
  errorMessage: null,
};

export default function ErrorMessage({ errorMessage, id }) {
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

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;
