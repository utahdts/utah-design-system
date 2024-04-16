import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { menuTypes } from '../../../enums/menuTypes';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */

/**
 * @param {object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenuItem} props.menuItem
 * @param {MenuTypes} [props.menuType]
 * @returns {import('react').JSX.Element}
 */
export function MenuItemPlain({
  currentMenuItem,
  menuItem,
  menuType,
}) {
  const navLinkRef = useRef(/** @type {HTMLAnchorElement | null} */(null));
  return (
    <li className={menuType === menuTypes.VERTICAL ? 'vertical-menu__item' : 'menu-item'}>
      <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__title' : 'menu-item__title'}>
        {
            (!menuItem?.link || menuItem?.link?.includes('::'))
              ? <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__title__plain' : 'menu-item__title__plain'}>{menuItem.title}</span>
              : (
                <NavLink
                  className={(navData) => joinClassNames(
                    menuType === menuTypes.VERTICAL ? 'vertical-menu__link-title' : 'menu-item__link-title',
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
        <span className="menu-chiclet" />
      </span>
      {
          menuItem.children?.length
            ? (
              <ul role="menu" className={menuType === menuTypes.VERTICAL ? 'vertical-menu' : ''}>
                {menuItem.children.map((menuItemChild) => (
                  <MenuItemPlain
                    key={`menu-item__child__${menuItemChild.link}-${menuItemChild.title}}`}
                    menuItem={menuItemChild}
                    menuType={menuType}
                  />
                ))}
              </ul>
            )
            : null
      }
    </li>
  );
}
