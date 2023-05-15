// @ts-check
import PropTypes from 'prop-types';
import MenuItemShape from '../MenuItemShape';
import EventActionShape from './EventActionShape';
import UserInfoShape from './UserInfoShape';

/**
 * see jsDocTypes.UtahIDSettings (should always be matched)
 */

export default PropTypes.shape({
  currentUser: UserInfoShape,
  onAuthChanged: PropTypes.func,
  onProfile: EventActionShape,
  onSignIn: EventActionShape,
  onSignOut: EventActionShape,
  menuItems: PropTypes.arrayOf(MenuItemShape),
});
