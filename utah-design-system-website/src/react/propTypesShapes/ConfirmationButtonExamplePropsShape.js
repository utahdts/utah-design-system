import PropTypes from 'prop-types';

// uses ConfirmationButtonExamplePropsShape

export default PropTypes.exact({
  appearance: PropTypes.string,
  isBusy: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  promptChildren: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
});
