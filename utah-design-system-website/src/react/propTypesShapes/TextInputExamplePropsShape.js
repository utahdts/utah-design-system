import PropTypes from 'prop-types';

// uses TextInputExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
});
