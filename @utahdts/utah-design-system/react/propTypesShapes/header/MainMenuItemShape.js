// @ts-check
import PropTypes from 'prop-types';
import EventActionShape from './EventActionShape';
import MenuItemFunctionUrlActionShape from './MenuItemFunctionUrlActionShape';
import MenuItemShape from './MenuItemShape';
import MenuItemUrlActionShape from './MenuItemUrlActionShape';

/**
 * see jsDocTypes.MainMenuItem (should always be matched)
 */

export default PropTypes.shape({
  actionUrl: MenuItemUrlActionShape,
  actionFunction: EventActionShape,
  actionFunctionUrl: MenuItemFunctionUrlActionShape,
  actionMenu: PropTypes.arrayOf(MenuItemShape),
  childrenMenuType: PropTypes.oneOf(['flyout', 'inline', 'mega-menu']),
  className: PropTypes.string,
  icon: PropTypes.node,
  isDivider: PropTypes.bool,
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
});
