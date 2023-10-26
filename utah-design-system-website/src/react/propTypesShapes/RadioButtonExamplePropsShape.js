import PropTypes from 'prop-types';

// uses RadioButtonExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperLabel: PropTypes.string,
});
