import PropTypes from 'prop-types';

export default PropTypes.exact({
  // how many items per page
  itemsPerPage: PropTypes.number,

  // what page to start on
  currentPageIndex: PropTypes.number,
});
