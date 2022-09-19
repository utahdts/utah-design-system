import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import MenuItem from './MenuItem';

const propTypes = {
  currentMenuItem: MenuItemShape,
  menus: PropTypes.arrayOf(MenuShape).isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function SidePanelNavigation({ currentMenuItem, menus }) {
  return (
    menus.map((menu) => (
      <div className="menu-side-panel" key={`side-panel-navigation-menu__${menu.id}`}>
        <div className="menu-side-panel__header">{menu.header}</div>
        <ul key={`side-panel-navigation-menu__${menu.id}`}>
          {menu.menuItems.map((menuItem) => (
            <MenuItem currentMenuItem={currentMenuItem} menuItem={menuItem} key={`menu-side-panel__menu-item__${menuItem.link}-${menuItem.title}}`} />
          ))}
        </ul>
      </div>
    ))
  );
}

SidePanelNavigation.propTypes = propTypes;
SidePanelNavigation.defaultProps = defaultProps;

export default SidePanelNavigation;
