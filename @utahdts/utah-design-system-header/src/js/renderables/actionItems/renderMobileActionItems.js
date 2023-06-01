// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';
import addMobileMenuContentItem from '../mobile/addMobileMenuContentItem';
import mobileMenuInteractionHandler from '../mobile/mobileMenuInteractionHandler';
import renderMobileActionItem from './renderMobileActionItem';

/**
 * @typedef {import('../../misc/jsDocTypes').ActionItem} ActionItem
 * @typedef {import('../../misc/jsDocTypes').AriaHasPopupType} AriaHasPopupType
*/

export default function renderMobileActionItems() {
  const homeActionItem = document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__HOME_ID);
  if (!homeActionItem) {
    throw new Error('renderMobileActionItems: homeActionItem not found');
  }
  const homeActionItemWrapper = (
    /** @type {HTMLElement} */ (homeActionItem.closest(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER)))
  );
  if (!homeActionItemWrapper) {
    throw new Error('renderMobileActionItems: homeActionItemWrapper not found');
  }
  const hasUtahId = !!getUtahHeaderSettings().utahId;
  const profileActionItem = hasUtahId ? document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__PROFILE_ID) : null;
  const profileActionItemWrapper = (
    /** @type {HTMLElement} */ (profileActionItem?.closest?.(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER)))
  );

  [...(getUtahHeaderSettings().actionItems || [])]
    ?.reverse()
    ?.map((actionItemToRender) => ({ actionItem: actionItemToRender, ...renderMobileActionItem(actionItemToRender) }))
    ?.forEach(({ actionItem, actionItemContent, actionItemElement }) => {
      /** @type {HTMLElement | null} */
      let actionItemsWrapper;
      switch (actionItem.mobileMenuLocation) {
        case 'left':
          actionItemsWrapper = homeActionItemWrapper;
          break;

        case 'none':
          actionItemsWrapper = null;
          break;

        case 'right':
        default:
          // if right, but no admin button, just put on left with the rest of them (there is no right/left)
          // default to right if not specified
          actionItemsWrapper = profileActionItemWrapper || homeActionItemWrapper;
          break;
      }
      if (actionItemsWrapper) {
        actionItemsWrapper.after(actionItemElement);

        // render content item and hook up exposing it
        if (actionItemContent) {
          const mobileContentItem = addMobileMenuContentItem(actionItemContent);

          /** @type {AriaHasPopupType | null} */
          let ariaHasPopupType = null;
          if (actionItem.actionDom) {
            ariaHasPopupType = 'dialog';
          } else if (actionItem.actionPopupMenu) {
            ariaHasPopupType = 'menu';
          }

          mobileMenuInteractionHandler(
            actionItemElement,
            mobileContentItem,
            actionItemElement,
            { ariaHasPopupType, shouldOnClickCloseMenu: false }
          );
        }
      }
    });

  // no menu, no item. EOL.
  const settings = getUtahHeaderSettings();
  if (!settings.mainMenu) {
    homeActionItem.remove();
    homeActionItemWrapper.remove();
  }
}
