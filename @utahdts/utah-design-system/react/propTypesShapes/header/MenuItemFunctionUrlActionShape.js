// @ts-check
import PropTypes from 'prop-types';

/**
 * see jsDocTypes.MenuItemFunctionUrlAction (should always be matched)
 */

export default PropTypes.shape({
  actionFunction: PropTypes.func.isRequired,
  skipHandleEvent: PropTypes.bool,
  openInNewTab: PropTypes.bool,
  url: PropTypes.string.isRequired,
});
