import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import joinClassNames from '../../util/joinClassNames';
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
    menus.map((menu) => {
      const TitleTagName = menu.titleTagName || 'h2';
      return (
        <nav className="menu-side-panel" key={`side-panel-navigation-menu__${menu.id}`} aria-labelledby={menu.id}>
          <TitleTagName
            id={menu.id}
            className={joinClassNames(menu.titleTagClassName, 'menu-side-panel__header')}
          >
            {menu.header}
          </TitleTagName>
          <ul key={`side-panel-navigation-menu__${menu.id}`}>
            {menu.menuItems.map((menuItem) => (
              <MenuItem currentMenuItem={currentMenuItem} menuItem={menuItem} key={`menu-side-panel__menu-item__${menuItem.link}-${menuItem.title}}`} />
            ))}
          </ul>
        </nav>
      );
    })
  );
}

SidePanelNavigation.propTypes = propTypes;
SidePanelNavigation.defaultProps = defaultProps;

export default SidePanelNavigation;
