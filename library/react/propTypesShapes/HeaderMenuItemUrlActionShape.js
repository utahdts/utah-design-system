import PropTypes from 'prop-types';

// copied from jsDocTypes.js MenuItemUrlAction
export default PropTypes.exact({
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
});
