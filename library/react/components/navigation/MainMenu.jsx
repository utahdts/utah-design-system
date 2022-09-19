import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import MenuItem from './MenuItem';

const propTypes = {
  currentMenuItem: MenuItemShape,
  mainMenu: MenuShape.isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function MainMenu({ currentMenuItem, mainMenu }) {
  return (
    <div className="menu-bar dark-text">
      <ul>
        {mainMenu?.menuItems?.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={`main-menu__nav-link__${menuItem.link}-${menuItem.title}}`} currentMenuItem={currentMenuItem} />
        ))}
      </ul>
    </div>
  );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
