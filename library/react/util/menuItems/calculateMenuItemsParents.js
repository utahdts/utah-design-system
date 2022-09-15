import identity from 'lodash/identity';

/**
 * For each menu item, add information about who are the parents so that when a menu item is visited, the
 * top main menu can still highlight this menu item's parent main menu item. ie if on the Segmented Buttons
 * page, the Library menu item at the top is shown as selected.
 *
 * !! This will change the contents of menuItems !!
 * so pass a copied object to preserve initial data of constants
 *
 * Example incoming data:
 * {
 *   isMenuHeader: true,
 *   title: 'Buttons',
 *   parentLinks: [pages.library.link],
 *   children: [
 *     { link: pages.button.link, title: pages.button.pageTitle, parentLinks: [pages.library.link, 'menuHeader::buttons'] },
 *     { link: pages.segmentedButton.link, title: pages.segmentedButton.pageTitle, parentLinks: [pages.library.link, pages.buttons.link] },
 *   ],
 * }

* Example outgoing data:
 * {
 *   isMenuHeader: true,
 *   title: 'Buttons',
 *   parentLinks: [pages.library.link],
 *   children: [
 *     { link: pages.button.link, title: pages.button.pageTitle, parentLinks: [pages.library.link, 'menuHeader::buttons'] },
 *     { link: pages.segmentedButton.link, title: pages.segmentedButton.pageTitle, parentLinks: [pages.library.link, pages.buttons.link] },
 *   ],
 * }
 *
 * @param object.parentLinks [string] (optional) the known parent links passed recursively from parents to children
 * @param object.menuItems [MenuItemShape] the menuItems for which to add parents
 * @returns the menuItems now with parentLinks information
 */
function calculateMenuItemsParents({ parentLinks = [], menuItems }) {
  return (menuItems || []).map((menuItem) => {
    const menuItemLink = menuItem.isMenuHeader ? `menuHeader::${menuItem.title}` : menuItem.link;
    return {
      ...menuItem,
      link: menuItemLink,
      parentLinks: [...(menuItem.parentLinks || []), ...parentLinks],
      children: menuItem.children && calculateMenuItemsParents({
        parentLinks: [
          ...(menuItem.parentLinks || []),
          ...parentLinks,
          menuItemLink,
        ].filter(identity),
        menuItems: menuItem.children,
      }),
    };
  });
}

export default calculateMenuItemsParents;
