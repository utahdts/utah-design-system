import { useLocation } from 'react-router-dom';
import useRefAlways from './useRefAlways';
import findMenuItemInMenusByPathname from '../util/menuItems/findMenuItemInMenusByPathname';
import useStateEffect from './useStateEffect';

/**
 * Compares lists of menuItems against the current url location to determine which menu
 * item is the currently visited menu item.
 *
 * @param menus all the known menus
 * @returns the first menu item from all the menus that matches the current url
 */
export default function useCurrentMenuItem(menus) {
  const { pathname } = useLocation();
  const pathnameRef = useRefAlways(pathname);

  const menusRef = useRefAlways(menus);
  const [currentMenuItem] = useStateEffect({
    calculateValueFn: () => findMenuItemInMenusByPathname({
      menus: menusRef.current,
      pathname: pathnameRef.current,
    }),
    dependencyList: [...menus, pathname],
  });

  return currentMenuItem;
}
