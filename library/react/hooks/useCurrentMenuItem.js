import { useLocation } from 'react-router-dom';
import useRefAlways from './useRefAlways';
import findMenuItemInMenuItemsListsByPathname from '../util/menuItems/findMenuItemInMenuItemsListsByPathname';
import useStateEffect from './useStateEffect';

/**
 * Compares lists of menuItems against the current url location to determine which menu
 * item is the currently visited menu item.
 *
 * @param ...menuItemsLists each menuItems list sent as a separate parameter; send as many as you like
 * @returns the first menu item from the lists that matches the current url
 */
function useCurrentMenuItem(...menuItemsLists) {
  const { pathname } = useLocation();
  const pathnameRef = useRefAlways(pathname);

  const menuItemsListsArray = Array.from(menuItemsLists);
  const menuItemsListsArrayRef = useRefAlways(menuItemsListsArray);
  const [currentMenuItem] = useStateEffect({
    calculateValueFn: () => findMenuItemInMenuItemsListsByPathname({
      menuItemsListsArray: menuItemsListsArrayRef.current,
      pathname: pathnameRef.current,
    }),
    dependencyList: [...menuItemsListsArray, pathname],
  });

  return currentMenuItem;
}

export default useCurrentMenuItem;
