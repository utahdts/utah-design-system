import PropTypes from 'prop-types';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MenuItem from './MenuItem';

const propTypes = {
  menuItems: MenuItemsShape.isRequired,
  selectedMenuLink: PropTypes.string,
};
const defaultProps = {
  selectedMenuLink: null,
};

function MainMenu({ menuItems, selectedMenuLink }) {
  return (
    <div className="menu-bar dark-text">
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={`main-menu__nav-link__${menuItem.link}-${menuItem.title}}`} selectedMenuLink={selectedMenuLink} />
        ))}
      </ul>
    </div>
  );
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
