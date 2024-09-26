import { childrenMenuTypes } from '@utahdts/utah-design-system-header';
import { joinClassNames } from '../../util/joinClassNames';
import { MenuItemInline } from './items/MenuItemInline';
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
 * @param {boolean} [props.triggerOnHover]
 * @returns {import('react').JSX.Element}
 */
export function VerticalMenu({
  className,
  currentMenuItem,
  menus,
  triggerOnHover = true,
}) {
  return (
    <>
      {
        menus.map((menu) => {
          const TitleTagName = menu.titleTagName || 'h2';
          return (
            <div className={className} key={`vertical-menu__${menu.id}`} aria-labelledby={menu.header ? menu.id : undefined}>
              {
                menu.header ? (
                  /* @ts-expect-error */
                  <TitleTagName
                    id={menu.id}
                    className={joinClassNames(menu.titleTagClassName, 'vertical-menu__header')}
                  >
                    {menu.header}
                  </TitleTagName>
                )
                  : null
              }
              <ul key={`vertical-menu__list__${menu.id}`} className="vertical-menu">
                {menu.menuItems.map((menuItem) => {
                  let result;
                  switch (menuItem.childrenMenuType) {
                    case childrenMenuTypes.INLINE:
                      result = (
                        <MenuItemInline
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
                          triggerOnHover={triggerOnHover}
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
            </div>
          );
        })
      }
    </>
  );
}
