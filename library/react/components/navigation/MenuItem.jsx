import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import arrayMatchRecursive from '../../util/arrayMatchRecursive';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  currentPageLink: PropTypes.string,
  menuItem: MenuItemShape.isRequired,
  selectedMenuLink: PropTypes.string,
};
const defaultProps = {
  currentPageLink: null,
  selectedMenuLink: null,
};

function MenuItem({ currentPageLink, menuItem, selectedMenuLink }) {
  // check if any of this menuItem's children are the currently open page/menuItem and if so, then keep this menuItem's children list open
  const [isChildrenOpen, setIsChildrenOpen] = useState(() => currentPageLink && arrayMatchRecursive({ object: menuItem, arrayField: 'children', isMatchFunc: (testMenuItem) => testMenuItem.link === currentPageLink }));

  return (
    <li className="menu-item">
      {
        menuItem.isNotPage
          ? <div>{menuItem.title}</div>
          : (
            <NavLink
              className={(navData) => joinClassNames((selectedMenuLink === menuItem.link || navData.isActive) && 'menu-item--selected')}
              to={menuItem.link}
              end
            >
              {menuItem.title}
            </NavLink>
          )
      }
      {menuItem.children ? (
        <>
          <button
            type="button"
            className={joinClassNames(
              'menu-item__chevron',
              isChildrenOpen && 'menu-item__chevron--open'
            )}
            onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
          >
            Menu Chevron
          </button>
          <ul className={joinClassNames('menu-item__sub-menu', isChildrenOpen ? 'menu-item__sub-menu--open' : '')}>
            {menuItem.children?.map((menuItemChild) => (
              <MenuItem
                menuItem={menuItemChild}
                key={`menu-item__child__${menuItemChild.link}-${menuItemChild.title}}`}
              />
            ))}
          </ul>
        </>
      ) : null}
    </li>
  );
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
