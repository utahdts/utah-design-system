// @ts-check
import childrenMenuTypes from '../../enumerations/childrenMenuTypes';
import { getUtahHeaderSettings } from '../../settings/settings';
import { renderMenu } from '../popupMenu/renderPopupMenu';

export default function renderMobileMenuHomeMenu() {
  return renderMenu(
    getUtahHeaderSettings().mainMenu.menuItems,
    {
      childrenMenuType: childrenMenuTypes.INLINE,
      removePopupArrow: true,
    }
  );
}
