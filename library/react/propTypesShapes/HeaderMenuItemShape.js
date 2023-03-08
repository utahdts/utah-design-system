import PropTypes from 'prop-types';
import MenuItemUrlActionShape from './HeaderMenuItemUrlActionShape';

// copied from jsDocTypes.js MenuItem
const MenuItemShape = {
  // should be only one of the following three action types
  actionUrl: MenuItemUrlActionShape,
  actionFunction: PropTypes.func,
  // actionMenu: PropTypes.arrayOf(MenuItemShape), <-- recursive is added after creation

  className: PropTypes.string,
  icon: PropTypes.node,
  isDivider: PropTypes.bool,
  isSelected: PropTypes.bool,
  title: PropTypes.string,
};

// add in property for children to be a list of `menuItem`. This is recursive so had to be coded in two phases
MenuItemShape.actionMenu = PropTypes.arrayOf(PropTypes.exact(MenuItemShape));

export default PropTypes.exact(MenuItemShape);
