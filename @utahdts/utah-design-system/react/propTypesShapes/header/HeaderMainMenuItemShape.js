import PropTypes from 'prop-types';
import MenuItemShape from '../MenuItemShape';
import MenuItemUrlActionShape from './HeaderMenuItemUrlActionShape';

// copied from jsDocTypes.js MainMenuItem
export default PropTypes.exact({
  // should be only one of the following three action types
  actionUrl: MenuItemUrlActionShape,
  actionFunction: PropTypes.func,
  actionMenu: PropTypes.arrayOf(MenuItemShape),

  // see childrenMenuTypes.js in utah header, utah header defaults this 'flyout',
  childrenMenuType: PropTypes.oneOf(['flyout', 'inline', 'mega - menu']),
  className: PropTypes.string,
  icon: PropTypes.node,
  isDivider: PropTypes.bool,
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
});
