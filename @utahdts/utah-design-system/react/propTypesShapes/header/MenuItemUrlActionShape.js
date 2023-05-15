// @ts-check
import PropTypes from 'prop-types';

/**
 * see jsDocTypes.MenuItemUrlAction (should always be matched)
 */

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
});
