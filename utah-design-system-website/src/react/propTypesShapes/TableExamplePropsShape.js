import PropTypes from 'prop-types';

export default PropTypes.exact({
  className: PropTypes.string,
  id: PropTypes.string,
  isFiltering: PropTypes.bool,
  isPaginating: PropTypes.bool,
  isSorting: PropTypes.bool,
});
