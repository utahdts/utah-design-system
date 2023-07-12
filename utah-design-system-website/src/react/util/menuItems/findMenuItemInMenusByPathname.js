// @ts-check
/** @typedef {import ('../../../typedefs.d.js').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import ('../../../typedefs.d.js').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} parent
 * @returns {(WebsiteMainMenu | WebsiteMainMenuItem)[]}
 */
function flattenChildren(parent) {
  return [
    parent,
    // @ts-ignore
    ...(parent?.children?.map(flattenChildren) || []),
  ];
}

/**
 * Given lists of menuItems, find the a menuItem that matches the current website path.
 *
 * @param {object} props
 * @param {WebsiteMainMenu[]} props.menus menus in which to search (mainMenu, sidePanel, etc) (see menus.js)
 * @param {string} props.pathname string the current pathname on which to match a menuItem
 * @returns {WebsiteMainMenu | WebsiteMainMenuItem | undefined} the matching menu item or `undefined` if not found
 */
function findMenuItemInMenusByPathname({ menus, pathname }) {
  return (
    /** @type {(WebsiteMainMenuItem)[]} */ (
      (menus || []).map((menu) => (
        (menu?.menuItems || []).map(flattenChildren)
      ))
        .flat(Infinity)
    )
      .find((menuItem) => menuItem.link === pathname)
  );
}

export default findMenuItemInMenusByPathname;
