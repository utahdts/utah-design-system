import { childrenMenuTypes } from '../../enumerations/childrenMenuTypes';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { renderMenu } from '../popupMenu/renderPopupMenu';

export function renderMobileMenuHomeMenu() {
  const settings = getUtahHeaderSettings();
  return renderMenu(
    (settings.mainMenu && settings.mainMenu?.menuItems) || undefined,
    {
      childrenMenuType: childrenMenuTypes.INLINE,
      parentMenuLinkSuffix: typeof settings.mainMenu === 'object' ? settings.mainMenu.parentMenuLinkSuffix : undefined,
      removePopupArrow: true,
    }
  );
}
