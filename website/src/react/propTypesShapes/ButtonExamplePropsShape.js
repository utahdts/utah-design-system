import PropTypes from 'prop-types';

export default PropTypes.exact({
  appearance: PropTypes.string,
  isBusy: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  // title is put in as the "children" of the Button component
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
});
