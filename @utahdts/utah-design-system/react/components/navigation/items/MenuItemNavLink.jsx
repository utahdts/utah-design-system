import { menuTypes } from '../../../enums/menuTypes';
import { joinClassNames } from '../../../util/joinClassNames';

/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {import('react').RefObject<HTMLAnchorElement | null>} [props.innerRef]
 * @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
 * @param {MenuTypes} [props.menuType]
 * @returns {import('react').JSX.Element}
 */
export function MenuItemNavLink({
  currentMenuItem,
  innerRef,
  menuItem,
  menuType,
}) {
  return (
    <a
      className={joinClassNames(
        menuType === menuTypes.VERTICAL ? 'vertical-menu__link-title' : 'menu-item__link-title',
        currentMenuItem?.parentLinks?.includes(menuItem.link ?? '') && (currentMenuItem?.children?.length ? '' : 'menu-item--selected_parent'),
        // @ts-expect-error
        ((currentMenuItem?.link && menuItem?.link) && (currentMenuItem.link === menuItem.link)) ? 'menu-item--selected' : ''
      )}
      href={menuItem.link || menuItem.actionUrl?.url || menuItem.actionFunctionUrl?.url || '#'}
      onClick={(e) => {
        if ((menuItem.actionFunctionUrl || menuItem.actionFunction) && !menuItem.actionFunctionUrl?.skipHandleEvent) {
          e.stopPropagation();
          e.preventDefault();
        }

        const eany = /** @type {any} */(e);
        if (menuItem.actionFunction) {
          menuItem.actionFunction(eany);
        }
        if (menuItem.actionFunctionUrl) {
          menuItem.actionFunctionUrl.actionFunction(eany);
        }
      }}
      ref={innerRef}
      rel="noreferrer"
      target={(menuItem.actionUrl?.openInNewTab || menuItem.actionFunctionUrl?.openInNewTab) ? '_blank' : undefined}
    >
      {menuItem.title}
    </a>
  );
}
