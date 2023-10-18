import PropTypes from 'prop-types';

// uses SelectExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
});
