import { menuTypes } from '../../../enums/menuTypes';
import { MenuItemNavLink } from './MenuItemNavLink';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */

/**
 * @param {object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
 * @param {MenuTypes} [props.menuType]
 * @returns {import('react').JSX.Element}
 */
export function MenuItemPlain({
  currentMenuItem,
  menuItem,
  menuType,
}) {
  return (
    <li className={menuType === menuTypes.VERTICAL ? 'vertical-menu__item' : 'menu-item'} role="menuitem">
      <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__title' : 'menu-item__title'}>
        {
          ((!menuItem?.link && !menuItem.actionFunction && !menuItem.actionFunctionUrl && !menuItem.actionUrl) || menuItem?.link?.includes('::'))
            ? <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__title__plain' : 'menu-item__title__plain'}>{menuItem.title}</span>
            : (
              <MenuItemNavLink
                currentMenuItem={currentMenuItem}
                menuItem={menuItem}
                menuType={menuType}
              />
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
