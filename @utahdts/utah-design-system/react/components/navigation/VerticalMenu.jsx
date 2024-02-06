import { childrenMenuTypes } from '@utahdts/utah-design-system-header';
import { joinClassNames } from '../../util/joinClassNames';
import { MenuItem } from './MenuItem';
import { MenuItemPlain } from './items/MenuItemPlain';
import { MenuItemFlyout } from './items/MenuItemFlyout';
import { menuTypes } from '../../enums/menuTypes';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenu[]} props.menus
 * @returns {import('react').JSX.Element}
 */
export function VerticalMenu({ className, currentMenuItem, menus }) {
  return (
    <>
      {
        menus.map((menu) => {
          const TitleTagName = menu.titleTagName || 'h2';
          return (
            <nav className={className} key={`vertical-menu__${menu.id}`} aria-labelledby={menu.id}>
              {/* @ts-ignore */}
              <TitleTagName
                id={menu.id}
                className={joinClassNames(menu.titleTagClassName, 'vertical-menu__header')}
              >
                {menu.header}
              </TitleTagName>
              <ul key={`vertical-menu__list__${menu.id}`} role="menu" className="vertical-menu">
                {menu.menuItems.map((menuItem) => {
                  let result;
                  switch (menuItem.childrenMenuType) {
                    case childrenMenuTypes.INLINE:
                      result = (
                        <MenuItem
                          menuType={menuTypes.VERTICAL}
                          currentMenuItem={currentMenuItem}
                          menuItem={menuItem}
                          key={`vertical-menu__menu-item__${menuItem.link}-${menuItem.title}}`}
                        />
                      );
                      break;
                    case childrenMenuTypes.FLYOUT:
                      result = (
                        <MenuItemFlyout
                          menuType={menuTypes.VERTICAL}
                          currentMenuItem={currentMenuItem}
                          menuItem={menuItem}
                          key={`vertical-menu__menu-item__${menuItem.link}-${menuItem.title}}`}
                        />
                      );
                      break;
                    default:
                      result = (
                        <MenuItemPlain
                          menuType={menuTypes.VERTICAL}
                          menuItem={menuItem}
                          key={`vertical-menu__menu-item__${menuItem.link}-${menuItem.title}}`}
                          currentMenuItem={currentMenuItem}
                        />
                      );
                  }
                  return result;
                })}
              </ul>
            </nav>
          );
        })
      }
    </>
  );
}
