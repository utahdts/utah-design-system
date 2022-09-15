import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MenuItem from './MenuItem';

const propTypes = {
  currentMenuItem: MenuItemShape,
  menuItems: MenuItemsShape.isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function MainMenu({ currentMenuItem, menuItems }) {
  return (
    <div className="menu-bar dark-text">
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={`main-menu__nav-link__${menuItem.link}-${menuItem.title}}`} currentMenuItem={currentMenuItem} />
        ))}
      </ul>
    </div>
  );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
