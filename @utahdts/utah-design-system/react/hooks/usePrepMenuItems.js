import cloneDeep from 'lodash/cloneDeep';
import calculateMenuItemsParents from '../util/menuItems/calculateMenuItemsParents';
import useStateEffect from './useStateEffect';

/**
 * Prep menu items for display. This includes such tasks as determining `parentLinks` chaining.
 *
 * @param [MenuItemShape] menuItems the menu item information to interpret
 * @returns new list of menu items with added calculated data like `parentLinks`
 */
function usePrepMenuItems({ menuItems }) {
  const [menuItemsPrepped] = useStateEffect({
    calculateValueFn: () => {
      const newMenuItems = cloneDeep(menuItems);

      return calculateMenuItemsParents({ menuItems: newMenuItems });
    },
    dependencyList: [menuItems],
  });

  return menuItemsPrepped;
}

export default usePrepMenuItems;
