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

function SidePanelNavigation({ currentMenuItem, menuItems }) {
  return (
    <div className="menu-side-panel">
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem currentMenuItem={currentMenuItem} menuItem={menuItem} key={`menu-side-panel__menu-item__${menuItem.link}-${menuItem.title}}`} />
        ))}
      </ul>
    </div>
  );
}

SidePanelNavigation.propTypes = propTypes;
SidePanelNavigation.defaultProps = defaultProps;

export default SidePanelNavigation;
