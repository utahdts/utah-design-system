// @ts-check
import PropTypes from 'prop-types';
import MainMenuItemShape from './MainMenuItemShape';

/**
 * see jsDocTypes.MainMenu (should always be matched)
 */

export default PropTypes.shape({
  menuItems: PropTypes.arrayOf(MainMenuItemShape).isRequired,
  title: PropTypes.string.isRequired,
});
