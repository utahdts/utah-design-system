import { useLayoutEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useStateEffect from '../../hooks/useStateEffect';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import joinClassNames from '../../util/joinClassNames';
import IconButton from '../buttons/IconButton';

const propTypes = {
  currentMenuItem: MenuItemShape,
  menuItem: MenuItemShape.isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function MenuItem({ currentMenuItem, menuItem }) {
  const { pathname } = useLocation();
  // check if any of this menuItem's children are the currently open page/menuItem and if so, then keep this menuItem's children list open
  const [isChildrenOpen, setIsChildrenOpen] = useStateEffect({
    calculateValueFn: (isChildrenOpenPreviously) => isChildrenOpenPreviously || currentMenuItem?.parentLinks?.includes(menuItem.link),
    dependencyList: [currentMenuItem, menuItem, pathname],
  });

  const navLinkRef = useRef(null);

  useLayoutEffect(
    () => {
      if (navLinkRef.current) {
        if (navLinkRef.current.classList.contains('menu-item--selected')) {
          navLinkRef.current.setAttribute('aria-current', 'page');
        } else {
          navLinkRef.current.removeAttribute('aria-current');
        }
      }
    }
  );

  if ((!menuItem?.link || menuItem?.link?.includes('::') || menuItem.children) && !menuItem.id) {
    console.error('A parent MenuItem requires an `id` to empower aria-labelledby', menuItem);
  }

  return (
    <li className="menu-item">
      <span className="menu-item__title">
        {/* === menu item title === */}
        {
          (!menuItem?.link || menuItem?.link?.includes('::'))
            ? (
              <button
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link}`}
                className="menu-item__button-title"
                id={`menu-item-${menuItem.id}-${menuItem.link}`}
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                type="button"
              >
                {menuItem.title}
              </button>
            )
            : (
              <NavLink
                className={(navData) => joinClassNames((currentMenuItem?.parentLinks?.includes(menuItem.link) || navData.isActive) && 'menu-item--selected')}
                end
                to={menuItem.link}
                ref={navLinkRef}
              >
                {menuItem.title}
              </NavLink>
            )
        }

        {/* === parent menu chevron expander === */}
        {
          menuItem.children
            ? (
              <IconButton
                aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link}`}
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                className={joinClassNames(
                  'menu-item__chevron',
                  'icon-button',
                  isChildrenOpen && 'menu-item__chevron--open'
                )}
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                icon={(
                  <svg
                    height="20"
                    width="20"
                    style={{ fill: 'currentColor' }}
                    className={isChildrenOpen ? '' : 'rotate270'}
                  >
                    <path d="M10 12.812 5 7.812 6.229 6.583 10 10.354 13.771 6.583 15 7.812Z" />
                  </svg>
                )}
              />
            )
            : null
        }
      </span>

      {/* === children menu items === */}
      {
        menuItem.children
          ? (
            <ul className={joinClassNames('menu-item__sub-menu', isChildrenOpen ? 'menu-item__sub-menu--open' : '')}>
              {menuItem.children?.map((menuItemChild) => (
                <MenuItem
                  key={`menu-item__child__${menuItemChild.link}-${menuItemChild.title}}`}
                  menuItem={menuItemChild}
                />
              ))}
            </ul>
          )
          : null
      }
    </li>
  );
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
