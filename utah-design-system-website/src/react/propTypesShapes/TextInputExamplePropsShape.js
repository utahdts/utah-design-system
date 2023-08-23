import PropTypes from 'prop-types';

// uses TextInputExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
});
