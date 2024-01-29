import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { findMenuItemInMenusByPathname } from '../util/menuItems/findMenuItemInMenusByPathname';

/** @typedef {import('utah-design-system-website').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('utah-design-system-website').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * Compares lists of menuItems against the current url location to determine which menu
 * item is the currently visited menu item.
 * @param {WebsiteMainMenu[]} menus all the known menus
 * @returns {WebsiteMainMenu | WebsiteMainMenuItem | undefined} the first menu item from all the menus that matches the current url
 */
export function useCurrentMenuItem(menus) {
  const { pathname } = useLocation();

  return useMemo(
    () => findMenuItemInMenusByPathname({ menus, pathname }),
    [...menus, pathname]
  );
}
