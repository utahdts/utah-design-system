import PropTypes from 'prop-types';
import MenuItemHierarchalShape from '../../propTypesShapes/MenuItemHierarchalShape';
import MenuItem from './MenuItem';

const propTypes = {
  currentPageLink: PropTypes.string.isRequired,
  menuItems: MenuItemHierarchalShape.isRequired,
};
const defaultProps = {};

function SidePanelNavigation({ currentPageLink, menuItems }) {
  return (
    <div className="menu-side-panel">
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={`menu-side-panel__menu-item__${menuItem.link}-${menuItem.title}}`} currentPageLink={currentPageLink} />
        ))}
      </ul>
    </div>
  );
}

SidePanelNavigation.propTypes = propTypes;
SidePanelNavigation.defaultProps = defaultProps;

export default SidePanelNavigation;
