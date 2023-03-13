// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import { getUtahHeaderSettings } from '../../settings/settings';
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
  const profileActionItem = document.getElementById(domConstants.MOBILE_MENU_ACTON_BAR__PROFILE_ID);
  if (!profileActionItem) {
    throw new Error('renderMobileActionItems: profileActionItem not found');
  }
  const profileActionItemWrapper = (
    /** @type {HTMLElement} */ (profileActionItem.closest(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER)))
  );
  if (!profileActionItemWrapper) {
    throw new Error('renderMobileActionItems: profileActionItemWrapper not found');
  }

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
          // default to right if not specified
          actionItemsWrapper = profileActionItemWrapper;
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
}
