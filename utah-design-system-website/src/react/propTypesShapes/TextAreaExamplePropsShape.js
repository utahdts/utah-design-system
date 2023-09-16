import PropTypes from 'prop-types';

// uses TextAreaExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  cols: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.string,
});
