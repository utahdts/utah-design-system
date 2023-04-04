import PropTypes from 'prop-types';

export default PropTypes.exact({
  className: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  labelOff: PropTypes.string,
  labelOn: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.bool,
  width: PropTypes.number,
});
