import { joinClassNames } from '../../util/joinClassNames';
import { MenuItem } from './MenuItem';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {Object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenu[]} props.menus
 * @returns {JSX.Element}
 */
export function VerticalMenu({ currentMenuItem, menus }) {
  return (
    <>
      {
        menus.map((menu) => {
          const TitleTagName = menu.titleTagName || 'h2';
          return (
            <nav className="menu-side-panel" key={`side-panel-navigation-menu__${menu.id}`} aria-labelledby={menu.id}>
              {/* @ts-ignore */}
              <TitleTagName
                id={menu.id}
                className={joinClassNames(menu.titleTagClassName, 'menu-side-panel__header')}
              >
                {menu.header}
              </TitleTagName>
              <ul key={`side-panel-navigation-menu__${menu.id}`} role="menu">
                {menu.menuItems.map((menuItem) => (
                  <MenuItem currentMenuItem={currentMenuItem} menuItem={menuItem} key={`menu-side-panel__menu-item__${menuItem.link}-${menuItem.title}}`} />
                ))}
              </ul>
            </nav>
          );
        })
      }
    </>
  );
}
