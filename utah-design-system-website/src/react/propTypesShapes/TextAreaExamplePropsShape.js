import PropTypes from 'prop-types';

// uses TextAreaExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
});
