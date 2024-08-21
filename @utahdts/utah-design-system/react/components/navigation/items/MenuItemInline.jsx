import { useEffect, useLayoutEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { menuTypes } from '../../../enums/menuTypes';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
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
export function MenuItemInline({
  currentMenuItem,
  menuItem,
  menuType = menuTypes.VERTICAL,
}) {
  // check if any of this menuItem's children are the currently open page/menuItem and if so, then keep this menuItem's children list open
  const [isChildrenOpen, setIsChildrenOpen] = useImmer(() => (
    !!currentMenuItem?.parentLinks?.includes(menuItem.link ?? '')
  ));

  useEffect(
    () => {
      setIsChildrenOpen((isChildrenOpenPreviously) => !!(isChildrenOpenPreviously || currentMenuItem?.parentLinks?.includes(menuItem.link ?? '')));
    },
    [currentMenuItem, menuItem]
  );

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
    <li className={menuType === menuTypes.VERTICAL ? 'vertical-menu__item' : 'menu-item'}>
      <span className="menu-item__title">
        {/* === menu item title === */}
        {
          ((!menuItem?.link && !menuItem.actionFunction && !menuItem.actionFunctionUrl && !menuItem.actionUrl) || menuItem?.link?.includes('::'))
            ? (
              <button
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                className="menu-item__button-title"
                id={encodeURI(`menu-item-${menuItem.id}-${menuItem.link || 'link'}`)}
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                type="button"
              >
                {menuItem.title}
              </button>
            )
            : (
              <MenuItemNavLink
                currentMenuItem={currentMenuItem}
                innerRef={navLinkRef}
                menuItem={menuItem}
                menuType={menuType}
              />
            )
        }

        {/* === parent menu chevron expander === */}
        {
          menuItem.children
            ? (
              <IconButton
                appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                aria-labelledby={encodeURI(`menu-item-${menuItem.id}-${menuItem.link || 'link'}`)}
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                className={joinClassNames(
                  'menu-item__chevron',
                  isChildrenOpen && 'menu-item__chevron--open'
                )}
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                icon={<span className="utds-icon-after-chevron-right icon" aria-hidden="true" />}
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
            <ul
              className={joinClassNames(
                'menu-item__sub-menu',
                menuType === menuTypes.VERTICAL ? 'vertical-menu' : '',
                isChildrenOpen ? 'menu-item__sub-menu--open' : ''
              )}
            >
              {menuItem.children?.map((menuItemChild) => (
                <MenuItemInline
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
