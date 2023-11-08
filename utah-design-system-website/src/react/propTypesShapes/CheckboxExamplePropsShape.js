import PropTypes from 'prop-types';

// uses CheckboxExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.bool,
});
