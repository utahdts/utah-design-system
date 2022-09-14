import { NavLink } from 'react-router-dom';
import MenuItemShape from '../../propTypesShapes/MenuItemsShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  menuItems: MenuItemShape.isRequired,
};
const defaultProps = {};

function MainMenu({ menuItems }) {
  return (
    <div className="menu-bar dark-text">
      <ul>
        {menuItems.map((menuItem) => (
          <li key={`main-menu__nav-link__${menuItem.link}-${menuItem.title}}`}>
            <NavLink
              className={(navData) => joinClassNames('menu-item', navData.isActive && 'menu-item--selected')}
              to={menuItem.link}
              end
            >
              {menuItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
