// @ts-check
import PropTypes from 'prop-types';
import MenuItemShape from '../MenuItemShape';

/**
 * see jsDocTypes.PopupMenu (should always be matched)
 */

export default PropTypes.shape({
  className: PropTypes.string,
  menuItems: PropTypes.arrayOf(MenuItemShape),
  title: PropTypes.string.isRequired,
});
