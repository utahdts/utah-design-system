import PropTypes from 'prop-types';

export default PropTypes.exact({
  className: PropTypes.string,
  id: PropTypes.string,
  pageSize: PropTypes.string,
  totalNumberItems: PropTypes.string,
  value: PropTypes.string,
  wrapInElement: PropTypes.oneOf(['div', 'nav']),
});
