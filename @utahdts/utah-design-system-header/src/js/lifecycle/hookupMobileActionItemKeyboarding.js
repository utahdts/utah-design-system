import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import { showActionItem } from '../renderables/mobile/mobileMenuInteractionHandler';

export default function hookupMobileActionItemKeyboarding() {
  // fetch all the icon buttons from the mobile menu action items, should be in order
  const allActionItemButtonsSTUPID = document.querySelectorAll(`
      ${getCssClassSelector(domConstants.MOBILE_MENU__ACTION_BAR)}
      ${getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER)}
      ${getCssClassSelector(domConstants.ACTION_ITEM__ICON_BUTTON)}
    `);

  const allActionItemButtons = [...allActionItemButtonsSTUPID];

  allActionItemButtons.forEach(
    (actionItemButton) => {
      // eslint-disable-next-line no-param-reassign
      actionItemButton.onkeydown = (e) => {
        if (
          e.code === 'Home'
          || e.code === 'End'
          || e.code === 'ArrowRight'
          || e.code === 'ArrowLeft'
        ) {
          e.preventDefault();
        }
      };

      // hook up right/left arrow to navigate among action items
      // eslint-disable-next-line no-param-reassign
      actionItemButton.onkeyup = (e) => {
        const actionItemButtonIndex = allActionItemButtons.indexOf(actionItemButton);

        let newIndex = NaN;

        if (e.code === 'Home') {
          // home goes to first one
          newIndex = 0;
        } else if (e.code === 'End') {
          // end goes to last one
          newIndex = allActionItemButtons.length - 1;
        } else if (e.code === 'ArrowRight') {
          // if right got to the right one or wrap to the far left
          newIndex = (actionItemButtonIndex + 1) % allActionItemButtons.length;
        } else if (e.code === 'ArrowLeft') {
          // if left got to the left one or wrap to the far right
          newIndex = (allActionItemButtons.length + actionItemButtonIndex - 1) % allActionItemButtons.length;
        }
        if (!Number.isNaN(newIndex)) {
          e.preventDefault();
          e.stopPropagation();

          const newActionItemButton = allActionItemButtons[newIndex];
          const newWrapper = /** @type {HTMLElement} */ (newActionItemButton.closest(
            getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER)
          ));
          if (!newWrapper) {
            throw new Error('hookupMobileActionItemKeyboarding: newWrapper not found... how in the blazes?!');
          }

          const newActionItemContentId = newActionItemButton.getAttribute('aria-controls');
          const newActionItemContent = newActionItemContentId && document.getElementById(newActionItemContentId);

          if (newActionItemContent) {
            // action item is not a custom function, so click away!
            newActionItemButton.click();
          } else {
            // action item is a custom function so hide hide all action item content
            const mobileMenuWrapper = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__WRAPPER)));
            if (!mobileMenuWrapper) {
              throw new Error('hookupMobileActionItemKeyboarding: mobileMenuWrapper not found');
            }
            const mobileContentWrapper = /** @type {HTMLElement} */ (
              mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT))
            );
            if (!mobileContentWrapper) {
              throw new Error('hookupMobileActionItemKeyboarding: mobileContentWrapper not found');
            }

            mobileContentWrapper.querySelectorAll(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT_ITEM))
              .forEach((contentItem) => contentItem.classList.remove(domConstants.IS_OPEN));
          }
          const mobileMenuWrapper = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__WRAPPER)));
          if (!mobileMenuWrapper) {
            throw new Error('hookupMobileActionItemKeyboarding: mobileMenuWrapper not found');
          }
          showActionItem(mobileMenuWrapper, newWrapper);
        }
      };
    }
  );
}
