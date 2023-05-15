// @ts-check
import PropTypes from 'prop-types';
import MenuItemShape from '../MenuItemShape';
import EventActionShape from './EventActionShape';
import MenuItemFunctionUrlActionShape from './MenuItemFunctionUrlActionShape';
import MenuItemUrlActionShape from './MenuItemUrlActionShape';

/**
 * see jsDocTypes.MenuItem (should always be matched)
 */

const menuItem = {
  actionUrl: MenuItemUrlActionShape,
  actionFunction: EventActionShape,
  actionFunctionUrl: MenuItemFunctionUrlActionShape,
  actionMenu: PropTypes.arrayOf(MenuItemShape),
  className: PropTypes.string,
  icon: PropTypes.node,
  isDivider: PropTypes.bool,
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

menuItem.children = PropTypes.arrayOf(PropTypes.exact(menuItem));

export default PropTypes.exact(menuItem);
