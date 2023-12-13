import { useLayoutEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ICON_BUTTON_APPEARANCE } from '../../enums/buttonEnums';
import useStateEffect from '../../hooks/useStateEffect';
import joinClassNames from '../../util/joinClassNames';
import IconButton from '../buttons/IconButton';
import Icons from '../icons/Icons';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {Object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenuItem} props.menuItem
 * @returns {JSX.Element}
 */
export function MenuItem({ currentMenuItem, menuItem }) {
  const { pathname } = useLocation();
  // check if any of this menuItem's children are the currently open page/menuItem and if so, then keep this menuItem's children list open
  const [isChildrenOpen, setIsChildrenOpen] = /** @type {typeof useStateEffect<boolean>} */ (useStateEffect)({
    calculateValueFn: (isChildrenOpenPreviously) => !!(isChildrenOpenPreviously || currentMenuItem?.parentLinks?.includes(menuItem.link ?? '')),
    dependencyList: [currentMenuItem, menuItem, pathname],
  });

  const navLinkRef = useRef(/** @type {HTMLAnchorElement | null} */(null));

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
    // eslint-disable-next-line no-console
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
                className={(navData) => joinClassNames(
                  (currentMenuItem?.parentLinks?.includes(menuItem.link ?? '') || navData.isActive)
                  && (currentMenuItem?.children?.length ? 'menu-item--selected_parent' : 'menu-item--selected')
                )}
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
                appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link}`}
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                className={joinClassNames(
                  'menu-item__chevron',
                  isChildrenOpen && 'menu-item__chevron--open'
                )}
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                icon={<Icons.IconChevron />}
                title="Expand sub-menu"
              />
            )
            : null
        }
        <span className="menu-chiclet" />
      </span>

      {/* === children menu items === */}
      {
        menuItem.children
          ? (
            <ul className={joinClassNames('menu-item__sub-menu', isChildrenOpen ? 'menu-item__sub-menu--open' : '')} role="menu">
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
