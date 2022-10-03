import PropTypes from 'prop-types';

export default PropTypes.exact({
  className: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  labelOff: PropTypes.string,
  labelOn: PropTypes.string,
  value: PropTypes.bool,
  width: PropTypes.number,
});
