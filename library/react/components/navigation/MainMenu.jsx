import { NavLink } from 'react-router-dom';
import MenuItemShape from '../../propTypesShapes/MenuItemsShape';

const propTypes = {
  menuItems: MenuItemShape.isRequired,
};
const defaultProps = {};

function MainMenu({ menuItems }) {
  return (
    <div>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={`main-menu__nav-link__${menuItem.link}-${menuItem.title}}`}>
            <NavLink
              className="TODO: joe-put-a-class-name-here?"
              to={menuItem.link}
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
