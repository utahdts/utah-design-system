import PropTypes from 'prop-types';

export default PropTypes.exact({
  isPopperVisible: PropTypes.bool,

  // https://popper.js.org/docs/v2/modifiers/offset/
  offsetDistance: PropTypes.string,
  offsetSkidding: PropTypes.string,

  popupText: PropTypes.string,
});
